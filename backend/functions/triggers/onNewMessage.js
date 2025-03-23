const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const sendPush = require("../utils/sendPush");

// Trigger: dispara push para o receiver quando nova mensagem é criada
exports.onNewMessage = onDocumentCreated("chats/{appointmentId}/messages/{messageId}", async (event) => {
  const message = event.data?.data();
  if (!message) return;

  try {
    await sendPush(
      message.receiverId,
      "Nova mensagem",
      message.text || "Você recebeu uma nova mensagem."
    );
    console.log(`📩 Push enviado para ${message.receiverId}`);
  } catch (err) {
    console.error("❌ Erro ao enviar push:", err);
  }
});
