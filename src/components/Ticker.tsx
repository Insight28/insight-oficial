
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
    <div className="w-full overflow-hidden bg-dark/90 backdrop-blur-sm py-4 border-y border-neon-purple">
      <div className="animate-ticker whitespace-nowrap">
        <span className="inline-block text-3xl font-medium text-white">
          {messages.join(' • ')} &nbsp; {messages.join(' • ')}
        </span>
      </div>
    </div>
  );
};

export default Ticker;
