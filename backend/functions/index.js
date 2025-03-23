const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// 🔥 TRIGGERS Firestore (v2)
const { onAppointmentCreated } = require("./triggers/onAppointmentCreated");
const { onAppointmentStatusChanged } = require("./triggers/onAppointmentStatusChanged");
const { onNewMessage } = require("./triggers/onNewMessage");
const { onNewReview } = require("./triggers/onNewReview");

// 🌐 ROTAS HTTP (REST)
const recommend = require("./routes/recommend");
const adminStats = require("./routes/adminStats");
const gamification = require("./routes/gamification");
const appointment = require("./routes/appointment");
const users = require("./routes/users");

// 📍 EXPORTAÇÕES

// Firestore Triggers
exports.onAppointmentCreated = onAppointmentCreated;
exports.onAppointmentStatusChanged = onAppointmentStatusChanged;
exports.onNewMessage = onNewMessage;
exports.onNewReview = onNewReview;

// HTTP Functions (v2)
exports.recommend = onRequest(recommend);
exports.adminStats = onRequest(adminStats);
exports.gamification = onRequest(gamification);
exports.appointment = onRequest(appointment);
exports.users = onRequest(users);
