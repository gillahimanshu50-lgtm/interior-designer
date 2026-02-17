import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 font-medium tracking-wide text-sm uppercase transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-royal-gold text-royal-black hover:bg-royal-goldLight",
    outline: "border border-royal-gold text-royal-gold hover:bg-royal-gold/10",
    ghost: "text-royal-ivory hover:text-royal-gold"
  };

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};