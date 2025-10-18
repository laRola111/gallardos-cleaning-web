// src/components/organisms/WhyChooseUsSection.js
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button'; // Importa el botón
import { FaAward, FaUsers, FaLeaf, FaClock } from 'react-icons/fa'; // Importa los íconos

// Mapeo de íconos
const iconMap = {
  FaAward, FaUsers, FaLeaf, FaClock
};

// Subcomponente para cada punto destacado
const FeaturePoint = ({ iconName, title, description, index }) => {
  const IconComponent = iconMap[iconName] || FaAward; // Fallback icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-start space-x-4 p-4"
    >
      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
        <IconComponent className="text-primary text-2xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted text-sm">{description}</p>
      </div>
    </motion.div>
  );
};


export default function WhyChooseUsSection({ lang, dict }) {

  // Función para scroll suave al botón de contacto
  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact'); // ID de la sección de contacto
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Sección con ID (opcional, si quieres enlazarla)
    <section id="why-choose-us" className="py-16 md:py-24 bg-background"> {/* Fondo blanco */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {dict.sectionSubtitle}
          </p>
        </motion.div>

        {/* Grid de Puntos Clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12 mb-12 md:mb-16">
          {dict.points.map((point, index) => (
            <FeaturePoint
              key={point.title}
              iconName={point.icon}
              title={point.title}
              description={point.description}
              index={index}
            />
          ))}
        </div>

         {/* Call to Action Opcional */}
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} // Delay adicional
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
         >
           <Button
              onClick={handleScrollToContact}
              variant="primary" // Botón con el color primario (azul)
              className="text-lg px-8 py-3 shadow-md"
            >
              {dict.ctaButton}
            </Button>
         </motion.div>

      </div>
    </section>
  );
}