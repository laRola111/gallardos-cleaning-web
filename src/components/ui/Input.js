// src/components/ui/Input.js
import React from 'react';
import { twMerge } from 'tailwind-merge';

// Usamos forwardRef para compatibilidad futura con react-hook-form
const Input = React.forwardRef(({ className = '', type = 'text', ...props }, ref) => {
  const baseClasses = "block w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-foreground placeholder-muted shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-150 ease-in-out";
  const mergedClasses = twMerge(baseClasses, className);

  return (
    <input type={type} className={mergedClasses} ref={ref} {...props} />
  );
});

Input.displayName = 'Input'; // Necesario para forwardRef
export default Input;