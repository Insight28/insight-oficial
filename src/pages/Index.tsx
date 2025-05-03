import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SocialIcon from "@/components/SocialIcon";
import Chatbot from "@/components/Chatbot";
import { MessageSquare, Globe, Instagram, Linkedin, Youtube } from "lucide-react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize background music (commented out for better user experience)
    // if (audioRef.current) {
    //   audioRef.current.volume = 0.1;
    //   audioRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    // }
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white">
      <audio 
        ref={audioRef}
        src="/audio/background-music.mp3" 
        loop 
      />
      
      {/* Header */}
      <Header />

      {/* Ticker */}
      <div className="pt-16">
        <Ticker />
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services */}
      <section id="services" className="section-padding bg-gradient-to-b from-dark to-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red bg-clip-text">
            <span className="text-stroke-gradient">Nossos Serviços</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard 
              title="Atendimento com I.A." 
              description="Transforme seu atendimento ao cliente com nossa solução baseada em inteligência artificial. Respostas rápidas e personalizadas 24/7."
              icon={<MessageSquare size={48} />}
            />
            <ServiceCard 
              title="Criação de site com I.A." 
              description="Desenvolva sites modernos e otimizados com o poder da I.A. Design personalizado, SEO avançado e experiência do usuário superior."
              icon={<Globe size={48} />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-gradient-to-b from-black to-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red bg-clip-text">
            <span className="text-stroke-gradient">Depoimentos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard 
              name="Maria Silva"
              company="Tech Solutions"
              testimonial="O atendimento com I.A. revolucionou nosso suporte ao cliente. Estamos economizando tempo e melhorando a satisfação dos clientes."
              rating={5}
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
            />
            <TestimonialCard 
              name="João Pereira"
              company="Marketing Digital"
              testimonial="Nosso novo site criado com a ajuda da I.A. aumentou nossa taxa de conversão em 40%. Design moderno e intuitivo."
              rating={4}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            />
            <TestimonialCard 
              name="Ana Rodrigues"
              company="E-commerce Fashion"
              testimonial="Profissionalismo e inovação. A equipe da Insight Group entregou além das nossas expectativas. Recomendo a todos!"
              rating={5}
              image="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80"
            />
          </div>
        </div>
      </section>

      {/* Social Media - Adjusted position */}
      <section id="community" className="section-padding pb-0 bg-gradient-to-b from-dark to-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red bg-clip-text">
            <span className="text-stroke-gradient">Nossas Redes Sociais</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <SocialButton icon={<Instagram size={28} />} platform="Instagram" url="https://instagram.com" />
            <SocialButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>} platform="TikTok" url="https://tiktok.com" />
            <SocialButton icon={<Youtube size={28} />} platform="Youtube" url="https://youtube.com" />
            <SocialButton icon={<Linkedin size={28} />} platform="LinkedIn" url="https://linkedin.com" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-gradient-to-b from-black to-dark pt-0">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red bg-clip-text">
            <span className="text-stroke-gradient">Fale Conosco</span>
          </h2>
          <div className="max-w-xl mx-auto neon-border-red p-8 rounded-lg bg-neon-purple/20 backdrop-blur-sm">
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-secondary/30 border border-neon-red rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-red text-lg"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-secondary/30 border border-neon-red rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-red text-lg"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-secondary/30 border border-neon-red rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-red text-lg"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-red text-white rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg font-medium"
              >
                Enviar Mensagem
              </button>
              <p className="text-base text-center mt-5 text-gray-300">
                Ou converse com o <span className="text-neon-cyan">Sr. Sterling</span>, nosso assistente virtual
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Updated logo style */}
      <footer className="py-8 bg-black border-t border-neon-red/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-4 w-[220px] neon-border-red rounded-xl overflow-hidden p-1">
              <img 
                src="/lovable-uploads/4d4aa5ce-abf3-421b-b75e-90f97188b8b0.png" 
                alt="Insight Group Logo" 
                className="w-full h-auto"
              />
            </div>
            <p className="mt-2 text-gray-400">© 2024 Insight Group. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

// New component for social buttons
const SocialButton = ({ icon, platform, url }: { icon: React.ReactNode, platform: string, url: string }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="neon-border-red flex items-center justify-center gap-3 p-3 rounded-full bg-dark/80 hover:bg-dark/50 transition-all duration-500 animate-float-slow text-white"
    >
      <span className="text-neon-purple">
        {icon}
      </span>
      <span className="font-medium">{platform}</span>
    </a>
  );
};

export default Index;
