
import React, { useState } from 'react';
import { Bot, Headphones, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } neon-border-red bg-dark`}
      >
        <div className="text-neon-purple">
          <div className="relative">
            <Bot size={30} />
            <Headphones size={18} className="absolute -top-1 -right-1" />
          </div>
        </div>
      </button>

      {/* Chatbot window */}
      <div
        className={`absolute bottom-0 right-0 w-80 sm:w-96 bg-dark border-2 rounded-lg overflow-hidden transition-all duration-500 transform origin-bottom-right neon-border-red ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-neon-red/20 to-neon-purple/20 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
              <div className="relative text-neon-purple">
                <Bot size={24} />
                <Headphones size={12} className="absolute -top-1 -right-1" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">Sr. Sterling</h3>
              <p className="text-xs text-gray-300">Assistente virtual</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Chat content */}
        <div className="h-80 p-4 overflow-y-auto">
          <div className="bg-secondary/50 rounded-lg p-3 mb-4 max-w-[80%]">
            <p className="text-sm text-white">Olá! Eu sou o Sr. Sterling, assistente virtual da Insight Group. Como posso ajudar você hoje?</p>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-2 bg-secondary/30 rounded-l-md focus:outline-none text-white"
            />
            <button className="bg-neon-red/20 hover:bg-neon-red/40 text-neon-red px-4 py-2 rounded-r-md">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
