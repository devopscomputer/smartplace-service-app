const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// POST /users/update - Atualiza nome, email e cidade do usuário
router.post("/update", async (req, res) => {
  const { uid, name, email, city } = req.body;

  if (!uid) {
    return res.status(400).json({ error: "O campo uid é obrigatório." });
  }

  const updates = {};
  if (name !== undefined) updates.name = name;
  if (email !== undefined) updates.email = email;
  if (city !== undefined) updates.city = city;

  try {
    await admin.firestore().collection("users").doc(uid).update(updates);
    res.json({ success: true });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar perfil do usuário." });
  }
});

module.exports = router;
