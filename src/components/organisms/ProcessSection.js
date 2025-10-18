// src/components/organisms/ProcessSection.js
'use client';

import { motion } from 'framer-motion';
import {
  FaPhoneVolume, FaFileInvoiceDollar, FaCalendarCheck, FaSmileBeam
} from 'react-icons/fa'; // Importa los íconos necesarios

// Mapeo de íconos
const iconMap = {
  FaPhoneVolume, FaFileInvoiceDollar, FaCalendarCheck, FaSmileBeam
};

// Subcomponente para cada paso del proceso
const ProcessStep = ({ iconName, title, description, index }) => {
  const IconComponent = iconMap[iconName] || FaSmileBeam; // Fallback

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative pl-12 pb-8 border-l border-dashed border-primary/50 last:border-l-0 last:pb-0"
    >
      {/* Círculo con ícono en la línea */}
      <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary/10 p-3 rounded-full border-4 border-background">
        <IconComponent className="text-secondary text-xl" />
      </div>
      {/* Contenido del paso */}
      <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
      <p className="text-muted text-sm">{description}</p>
    </motion.div>
  );
};

export default function ProcessSection({ lang, dict }) {
  return (
    // Sección con ID (opcional)
    <section id="process" className="py-16 md:py-24 bg-background"> {/* Fondo blanco */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Subtítulo */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, amount: 0.5 }}
           className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {dict.sectionTitle}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {dict.sectionSubtitle}
          </p>
        </motion.div>

        {/* Lista de Pasos */}
        <div className="relative">
          {dict.steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              iconName={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}