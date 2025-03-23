const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// 🔥 TRIGGERS Firestore
const onAppointmentCreated = require("./triggers/onAppointmentCreated");
const onAppointmentStatusChanged = require("./triggers/onAppointmentStatusChanged");
const onNewMessage = require("./triggers/onNewMessage");
const onNewReview = require("./triggers/onNewReview");

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

// HTTP Functions
exports.recommend = functions.https.onRequest(recommend);
exports.adminStats = functions.https.onRequest(adminStats);
exports.gamification = functions.https.onRequest(gamification);
exports.appointment = functions.https.onRequest(appointment);
exports.users = functions.https.onRequest(users);
