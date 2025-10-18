// src/components/ui/Label.js
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Label({ children, htmlFor, className = '', ...props }) {
  const baseClasses = 'block text-sm font-medium text-foreground mb-1.5'; // Añadido mb-1.5 para espacio
  const mergedClasses = twMerge(baseClasses, className);

  return (
    <label htmlFor={htmlFor} className={mergedClasses} {...props}>
      {children}
    </label>
  );
}