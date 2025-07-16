import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import QuickOrderModal from './QuickOrderModal';

const FloatingQuickOrder = ({ lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
      >
        <Phone className="w-6 h-6" />
      </button>
      
      <QuickOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </>
  );
};

export default FloatingQuickOrder;