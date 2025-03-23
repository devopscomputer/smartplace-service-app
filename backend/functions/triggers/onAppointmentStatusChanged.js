const { onDocumentUpdated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const sendSMS = require("../utils/sendSMS");

exports.onAppointmentStatusChanged = onDocumentUpdated("appointments/{id}", async (event) => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();

  if (!before || !after || before.status === after.status) return;

  try {
    const userRef = admin.firestore().collection("users").doc(after.clientId);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      const phone = userDoc.data().phone;
      const msg = `📅 Seu agendamento foi atualizado para: ${after.status}`;
      await sendSMS(phone, msg);
      console.log(`SMS enviado para ${phone}`);
    }
  } catch (err) {
    console.error("Erro ao enviar SMS:", err);
  }
});
