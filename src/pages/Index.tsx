
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SocialIcon from "@/components/SocialIcon";
import Chatbot from "@/components/Chatbot";
import { MessageSquare, Globe } from "lucide-react";

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
          <h2 className="section-title neon-text-purple">
            Nossos Serviços
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
          <h2 className="section-title neon-text-purple">
            Depoimentos
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

      {/* Social Media */}
      <section id="community" className="section-padding bg-gradient-to-b from-dark to-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title neon-text-purple">
            Nossas Redes Sociais
          </h2>
          <div className="flex justify-center gap-10 flex-wrap">
            <SocialIcon platform="instagram" url="https://instagram.com" />
            <SocialIcon platform="linkedin" url="https://linkedin.com" />
            <SocialIcon platform="youtube" url="https://youtube.com" />
            <SocialIcon platform="tiktok" url="https://tiktok.com" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-gradient-to-b from-black to-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-title neon-text-purple">
            Fale Conosco
          </h2>
          <div className="max-w-xl mx-auto neon-border-purple p-8 rounded-lg bg-dark/90 backdrop-blur-sm">
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-secondary/30 border border-secondary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple text-lg"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-secondary/30 border border-secondary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple text-lg"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-secondary/30 border border-secondary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple text-lg"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg font-medium"
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

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-neon-purple/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-4 w-[150px]">
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

export default Index;
