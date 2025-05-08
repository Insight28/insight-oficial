
import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ContactMenuProps {
  children: React.ReactNode;
}

const ContactMenu = ({ children }: ContactMenuProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-dark/95 backdrop-blur-md border-neon-cyan text-white p-5 shadow-lg neon-border-cyan" align="end">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-center bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red bg-clip-text text-transparent">
            Nossos Contatos
          </h3>
          
          <div className="flex items-center gap-3 p-2 hover:bg-secondary/30 rounded-md transition-colors">
            <Mail className="text-neon-cyan" size={20} />
            <span>insightgroup28@gmail.com</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 hover:bg-secondary/30 rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
              <path d="M17 7l-10 10" />
              <path d="M8 7h9v9" />
            </svg>
            <span>(11)91928-6674 / (11)97897-7969</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 hover:bg-secondary/30 rounded-md transition-colors">
            <Instagram className="text-neon-red" size={20} />
            <span>@insi_ght28</span>
          </div>
          
          <div className="flex justify-center mt-2">
            <img 
              src="/lovable-uploads/2bd1c935-a717-454d-99ea-99c0d3a65522.png" 
              alt="Instagram QR Code" 
              className="w-32 h-32 object-contain neon-border-purple rounded-md"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactMenu;
