const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// GET /points/:userId — Retorna os pontos de gamificação de um usuário
router.get("/points/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: "ID do usuário é obrigatório." });
  }

  try {
    const userPointsRef = admin.firestore().collection("points").doc(userId);
    const doc = await userPointsRef.get();

    if (!doc.exists) {
      return res.json({ totalPoints: 0, level: "iniciante" });
    }

    const data = doc.data();

    // Exemplo: definir nível com base em pontos
    const level =
      data.totalPoints >= 100 ? "ouro" :
      data.totalPoints >= 50 ? "prata" :
      data.totalPoints >= 10 ? "bronze" : "iniciante";

    res.json({
      totalPoints: data.totalPoints || 0,
      level
    });

  } catch (error) {
    console.error("Erro ao buscar pontos:", error);
    res.status(500).json({ error: "Erro ao consultar pontos do usuário" });
  }
});

module.exports = router;
