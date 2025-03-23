const admin = require("firebase-admin");

/**
 * Atualiza a média de avaliações e tags de um prestador
 * @param {string} providerId - UID do prestador avaliado
 */
module.exports = async function updateRatings(providerId) {
  if (!providerId) {
    console.warn("⚠️ Nenhum providerId informado para updateRatings");
    return;
  }

  try {
    const reviewsSnap = await admin.firestore()
      .collection("reviews")
      .where("reviewedUserId", "==", providerId)
      .get();

    let total = 0;
    let count = 0;
    const tagCount = {};

    reviewsSnap.forEach(doc => {
      const { rating, tags: reviewTags } = doc.data();

      if (typeof rating === "number") {
        total += rating;
        count++;
      }

      if (Array.isArray(reviewTags)) {
        reviewTags.forEach(tag => {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
      }
    });

    const avgRating = count > 0 ? parseFloat((total / count).toFixed(1)) : 0;

    await admin.firestore().collection("users").doc(providerId).update({
      avgRating,
      tagStats: tagCount
    });

    console.log(`✅ Avaliação atualizada para ${providerId}: média = ${avgRating}, tags =`, tagCount);
    return { avgRating, tagStats: tagCount };

  } catch (error) {
    console.error(`❌ Erro ao atualizar rating do prestador ${providerId}:`, error.message);
  }
};
