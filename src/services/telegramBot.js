// Telegram Bot Integration
class TelegramBotService {
  constructor(botToken, chatId) {
    this.botToken = botToken;
    this.chatId = chatId;
    this.baseUrl = `https://api.telegram.org/bot${botToken}`;
  }

  async sendMessage(message) {
    try {
      const response = await fetch(`${this.baseUrl}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Telegram bot xatosi:', error);
      throw error;
    }
  }

  formatOrderMessage(orderData, cartItems, lang) {
    const { name, phone, address, paymentMethod, notes, total } = orderData;
    
    const itemsList = cartItems.map(item => 
      `• ${item.title[lang]} x${item.count} - ${item.price * item.count}₽`
    ).join('\n');

    const paymentText = {
      cash: { ru: 'Наличными', uz: 'Naqd pul', en: 'Cash' },
      card: { ru: 'Картой', uz: 'Karta', en: 'Card' },
      online: { ru: 'Онлайн', uz: 'Onlayn', en: 'Online' }
    };

    return `
🍕 <b>YANGI BUYURTMA!</b>

👤 <b>Mijoz:</b> ${name}
📞 <b>Telefon:</b> ${phone}
📍 <b>Manzil:</b> ${address}
💳 <b>To'lov:</b> ${paymentMethod === 'cash' ? 'Naqd pul' : paymentMethod === 'card' ? 'Karta' : 'Onlayn'}

📋 <b>Buyurtma:</b>
${itemsList}

💰 <b>Jami summa:</b> ${total}₽

${notes ? `📝 <b>Izoh:</b> ${notes}` : ''}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `.trim();
  }

  async sendOrderNotification(orderData, cartItems, lang) {
    const message = this.formatOrderMessage(orderData, cartItems, lang);
    return await this.sendMessage(message);
  }
}

// Bot konfiguratsiyasi - bu ma'lumotlarni .env faylida saqlash kerak
export const createTelegramBot = (botToken, chatId) => {
  return new TelegramBotService(botToken, chatId);
};

// Default bot instance (keyinroq konfiguratsiya qilinadi)
export let telegramBot = null;

export const initializeTelegramBot = (botToken, chatId) => {
  telegramBot = createTelegramBot(botToken, chatId);
  return telegramBot;
};

export { telegramBot }