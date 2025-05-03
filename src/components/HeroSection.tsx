
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-16 overflow-hidden">
      {/* Background image with neon border */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full neon-border-red p-1">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
            }}
          >
            <div className="w-full h-full bg-dark/70 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 neon-text-red animate-pulse-neon-red">
                  INSIGHT GROUP
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                  Soluções inovadoras em tecnologia e inteligência artificial para o seu negócio
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a 
                    href="#services" 
                    className="px-6 py-3 bg-gradient-to-r from-neon-red to-neon-purple text-white rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Nossos Serviços
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-transparent border-2 border-neon-red text-white rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-neon-red/10"
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
