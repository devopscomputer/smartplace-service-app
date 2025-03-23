const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;

const client = twilio(accountSid, authToken);

/**
 * Envia SMS usando Twilio
 * @param {string} to - Número do destinatário (+55... no formato internacional)
 * @param {string} message - Texto da mensagem
 * @returns {Promise<void>}
 */
module.exports = async function sendSMS(to, message) {
  if (!to || !message) {
    console.warn("⚠️ Número de telefone ou mensagem ausente.");
    return;
  }

  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhone,
      to: to
    });

    console.log(`✅ SMS enviado para ${to}. SID: ${response.sid}`);
  } catch (error) {
    console.error(`❌ Erro ao enviar SMS para ${to}:`, error.message);
  }
};
