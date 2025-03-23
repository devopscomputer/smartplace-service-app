const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const sendPush = require("../utils/sendPush");

// Função acionada quando um novo agendamento é criado no Firestore
exports.onAppointmentCreated = onDocumentCreated("appointments/{id}", async (event) => {
  const data = event.data?.data();
  if (!data) {
    console.warn("Sem dados no evento de agendamento criado.");
    return;
  }

  try {
    await sendPush(
      data.providerId,
      "Novo agendamento",
      `Você recebeu um novo agendamento para ${data.date || "uma data futura"}.`
    );
    console.log(`Notificação enviada para prestador ${data.providerId}`);
  } catch (error) {
    console.error("Erro ao enviar notificação push:", error);
  }
});
