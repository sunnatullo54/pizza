import React, { useState } from 'react';
import { X, Bot, Settings } from 'lucide-react';
import { initializeTelegramBot } from '../services/telegramBot';

const BotConfigModal = ({ isOpen, onClose, lang }) => {
  const [config, setConfig] = useState({
    botToken: localStorage.getItem('telegram_bot_token') || '',
    chatId: localStorage.getItem('telegram_chat_id') || ''
  });
  const [isTestingBot, setIsTestingBot] = useState(false);

  const handleSave = () => {
    localStorage.setItem('telegram_bot_token', config.botToken);
    localStorage.setItem('telegram_chat_id', config.chatId);
    
    if (config.botToken && config.chatId) {
      initializeTelegramBot(config.botToken, config.chatId);
    }
    
    onClose();
  };

  const testBot = async () => {
    if (!config.botToken || !config.chatId) {
      alert('Bot token va Chat ID ni kiriting!');
      return;
    }

    setIsTestingBot(true);
    try {
      const bot = initializeTelegramBot(config.botToken, config.chatId);
      await bot.sendMessage('🤖 Test xabar - Bot muvaffaqiyatli ulandi!');
      alert('Bot muvaffaqiyatli ulandi!');
    } catch (error) {
      alert('Bot ulanishida xatolik: ' + error.message);
    } finally {
      setIsTestingBot(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {lang === 'ru' ? 'Настройка бота' :
               lang === 'uz' ? 'Bot sozlamalari' :
               'Bot Settings'}
            </h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bot Token
            </label>
            <input
              type="text"
              value={config.botToken}
              onChange={(e) => setConfig({...config, botToken: e.target.value})}
              placeholder="1234567890:ABCdefGHIjklMNOpqrsTUVwxyz"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Chat ID
            </label>
            <input
              type="text"
              value={config.chatId}
              onChange={(e) => setConfig({...config, chatId: e.target.value})}
              placeholder="-1001234567890"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
              {lang === 'ru' ? 'Как получить данные:' :
               lang === 'uz' ? 'Ma\'lumotlarni qanday olish:' :
               'How to get data:'}
            </h3>
            <ol className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>1. @BotFather ga "/newbot" yuboring</li>
              <li>2. Bot nomini kiriting</li>
              <li>3. Bot token ni nusxalang</li>
              <li>4. @userinfobot ga "/start" yuboring</li>
              <li>5. Chat ID ni nusxalang</li>
            </ol>
          </div>

          <div className="flex gap-3">
            <button
              onClick={testBot}
              disabled={isTestingBot}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition"
            >
              {isTestingBot ? 'Test...' : 'Test Bot'}
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition"
            >
              {lang === 'ru' ? 'Сохранить' :
               lang === 'uz' ? 'Saqlash' :
               'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotConfigModal;