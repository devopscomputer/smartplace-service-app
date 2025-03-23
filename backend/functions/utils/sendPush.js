const admin = require("firebase-admin");

/**
 * Envia uma notificação push para um usuário com base no FCM token salvo
 * @param {string} userId - ID do usuário no Firestore
 * @param {string} title - Título da notificação
 * @param {string} body - Corpo da notificação
 * @param {object} data - Dados opcionais extras (ex: { screen: 'Chat', appointmentId: '123' })
 */
module.exports = async function sendPush(userId, title, body, data = {}) {
  try {
    const userRef = admin.firestore().collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      console.warn(`Usuário ${userId} não encontrado`);
      return;
    }

    const fcmToken = userDoc.data().fcmToken;

    if (!fcmToken) {
      console.warn(`Usuário ${userId} não possui token FCM`);
      return;
    }

    const payload = {
      notification: {
        title,
        body,
      },
      data: {
        ...data,
        userId: userId,
      },
      token: fcmToken,
    };

    const response = await admin.messaging().send(payload);
    console.log(`✅ Push enviada para ${userId}:`, response);
  } catch (error) {
    console.error(`❌ Erro ao enviar push para ${userId}:`, error);
  }
};
