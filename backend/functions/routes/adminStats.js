const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Endpoint principal: retorna estatísticas de uso do app
router.get("/", async (req, res) => {
  try {
    const db = admin.firestore();

    const usersSnap = await db.collection("users").get();
    const appointmentsSnap = await db.collection("appointments").get();

    let totalProviders = 0;
    let totalClients = 0;
    let statusCount = {};

    usersSnap.forEach(doc => {
      const user = doc.data();
      if (user.type === "provider") totalProviders++;
      if (user.type === "client") totalClients++;
    });

    appointmentsSnap.forEach(doc => {
      const appt = doc.data();
      const status = appt.status || "unknown";
      statusCount[status] = (statusCount[status] || 0) + 1;
    });

    res.json({
      totalUsers: usersSnap.size,
      totalProviders,
      totalClients,
      totalAppointments: appointmentsSnap.size,
      appointmentsByStatus: statusCount
    });
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error);
    res.status(500).json({ error: "Erro interno ao buscar estatísticas" });
  }
});

module.exports = router;
