
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

type SocialPlatform = 'instagram' | 'linkedin' | 'youtube' | 'tiktok';

interface SocialIconProps {
  platform: SocialPlatform;
  url: string;
  className?: string;
}

const SocialIcon = ({ platform, url, className }: SocialIconProps) => {
  const getIcon = () => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={30} />;
      case 'linkedin':
        return <Linkedin size={30} />;
      case 'youtube':
        return <Youtube size={30} />;
      case 'tiktok':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        );
      default:
        return <Instagram size={30} />;
    }
  };

  const getHoverColor = () => {
    switch (platform) {
      case 'instagram':
        return 'hover:text-neon-red';
      case 'linkedin':
        return 'hover:text-neon-cyan';
      case 'youtube':
        return 'hover:text-neon-red';
      case 'tiktok':
        return 'hover:text-neon-purple';
      default:
        return 'hover:text-neon-red';
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn(
        "block p-3 rounded-full bg-secondary transition-all duration-300 hover:scale-110 animate-float",
        getHoverColor(),
        className
      )}
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;
