// src/components/ui/Button.js
import React from 'react';
import { twMerge } from 'tailwind-merge'; // Instalaremos esto si no está

export default function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseClasses = "px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-light focus:ring-secondary',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary',
    // Puedes añadir más variantes si necesitas (e.g., accent, danger)
  };

  const mergedClasses = twMerge(baseClasses, variants[variant] || variants.primary, className);

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
}