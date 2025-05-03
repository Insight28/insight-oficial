
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
      "neon-border-red p-6 rounded-lg bg-dark/80 backdrop-blur-sm hover:scale-105 transition-all duration-300",
      className
    )}>
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-neon-red">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
