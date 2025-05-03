
import React from 'react';

interface TestimonialCardProps {
  name: string;
  company?: string;
  testimonial: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, company, testimonial, rating, image }: TestimonialCardProps) => {
  return (
    <div className="neon-border-purple rounded-lg p-6 bg-dark/80 backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 overflow-hidden rounded-full mr-4 border-2 border-neon-purple">
          <img 
            src={image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          {company && <p className="text-sm text-gray-300">{company}</p>}
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </div>
      
      <p className="text-gray-200 italic">{testimonial}</p>
    </div>
  );
};

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={`w-5 h-5 ${filled ? 'text-neon-yellow fill-current' : 'text-gray-400'}`}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={filled ? 0 : 2} 
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};

export default TestimonialCard;
