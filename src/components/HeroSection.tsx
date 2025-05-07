
import React from 'react';
import logo_oficial from '../assets/logo_oficial.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center pt-16 overflow-hidden">
      {/* Background image with neon border */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full neon-border-red p-1">
          <div 
            className="w-full h-full bg-cover bg-center bg-gradient-to-b from-dark to-black"
          >
            <div className="w-full h-full bg-dark/70 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-6 w-[85%] md:w-[80%] lg:w-[75%] animate-float rounded-2xl overflow-hidden">
                  <img 
                    /*src="/lovable-uploads/4d4aa5ce-abf3-421b-b75e-90f97188b8b0.png"*/
                    /*src="/assets/logo_oficial.jpeg"*/
                     src={logo_oficial}
                    
                    alt="Insight Group Logo" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto mt-4">
                  Soluções inovadoras em tecnologia e inteligência artificial para o seu negócio
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a 
                    href="#services" 
                    className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-lg rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Nossos Serviços
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-transparent border-2 border-neon-purple text-white text-lg rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-neon-purple/10"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
