/**
 * Verifica se já existe um agendamento para o prestador no mesmo horário
 * @param {object} db - Instância do Firestore
 * @param {string} providerId - ID do prestador
 * @param {string} dateTime - Data/Hora do agendamento (ISO string ou Timestamp)
 * @returns {boolean} true se horário estiver disponível, false se ocupado
 */
module.exports = async function validateAppointment(db, providerId, dateTime) {
  if (!providerId || !dateTime) {
    console.warn("⚠️ Dados insuficientes para validar agendamento");
    return false;
  }

  try {
    const snap = await db.collection("appointments")
      .where("providerId", "==", providerId)
      .where("date", "==", dateTime)
      .where("status", "in", ["pending", "confirmed"])
      .get();

    const livre = snap.empty;
    if (!livre) {
      console.log(`⛔ Conflito: prestador ${providerId} já possui agendamento para ${dateTime}`);
    }

    return livre;
  } catch (error) {
    console.error("❌ Erro na validação de agendamento:", error);
    return false;
  }
};
