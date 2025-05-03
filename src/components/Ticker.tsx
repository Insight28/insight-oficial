
import React from 'react';

const messages = [
  "Transforme seu negócio com nossa tecnologia de ponta",
  "Soluções inovadoras que impulsionam seu crescimento",
  "Atendimento personalizado com inteligência artificial",
  "Sites modernos que convertem visitantes em clientes",
  "Experiência imersiva para seu público-alvo"
];

const Ticker = () => {
  return (
    <div className="w-full overflow-hidden bg-dark/80 backdrop-blur-sm py-3 border-y border-neon-red">
      <div className="animate-ticker whitespace-nowrap">
        <span className="inline-block text-xl font-medium neon-text-red animate-pulse-neon-red">
          {messages.join(' • ')} &nbsp; {messages.join(' • ')}
        </span>
      </div>
    </div>
  );
};

export default Ticker;
