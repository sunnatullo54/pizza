import { useState } from 'react';

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message, duration = 3000) => {
    const id = Date.now();
    const notification = { id, type, message, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return {
    notifications,
    addNotification,
    removeNotification,
    success: (message) => addNotification('success', message),
    error: (message) => addNotification('error', message),
    warning: (message) => addNotification('warning', message),
    info: (message) => addNotification('info', message)
  };
};