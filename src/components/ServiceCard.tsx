
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "neon-border-purple p-8 rounded-lg bg-dark/90 backdrop-blur-sm hover:scale-102 transition-all duration-300 h-full",
      className
    )}>
      <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center text-neon-purple">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center text-white">{title}</h3>
      <p className="text-lg text-gray-200 text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
