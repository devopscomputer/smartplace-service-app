const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// GET /recommend?clientId=abc123
router.get("/", async (req, res) => {
  const { clientId } = req.query;

  if (!clientId) {
    return res.status(400).json({ error: "clientId é obrigatório" });
  }

  try {
    const clientDoc = await admin.firestore().collection("users").doc(clientId).get();

    if (!clientDoc.exists) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    const { city } = clientDoc.data();

    const providersSnap = await admin.firestore()
      .collection("users")
      .where("type", "==", "provider")
      .where("city", "==", city)
      .orderBy("avgRating", "desc")
      .limit(3)
      .get();

    const results = [];
    providersSnap.forEach(doc => {
      const data = doc.data();
      results.push({
        id: doc.id,
        name: data.name,
        services: data.services || [],
        avgRating: data.avgRating || 0,
        photo: data.photo || null
      });
    });

    res.json(results);
  } catch (error) {
    console.error("Erro na recomendação:", error);
    res.status(500).json({ error: "Erro interno ao buscar recomendações" });
  }
});

module.exports = router;
