const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const validateAppointment = require("../utils/validateAppointment");

// POST /create - Criar novo agendamento
router.post("/create", async (req, res) => {
  const { clientId, providerId, date, serviceId } = req.body;

  if (!clientId || !providerId || !date || !serviceId) {
    return res.status(400).json({ error: "Dados incompletos para agendamento" });
  }

  const db = admin.firestore();
  const isValid = await validateAppointment(db, providerId, date);

  if (!isValid) {
    return res.status(400).json({ error: "Horário indisponível para esse prestador" });
  }

  try {
    const ref = await db.collection("appointments").add({
      clientId,
      providerId,
      date,
      serviceId,
      status: "pending",
      createdAt: admin.firestore.Timestamp.now()
    });

    res.status(201).json({ id: ref.id });
  } catch (err) {
    console.error("Erro ao criar agendamento:", err);
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
});

module.exports = router;
