// src/components/organisms/ServicesSection.js
'use client';

import { motion } from 'framer-motion';
import {
  FaHome, FaBuilding, FaKey, FaBoxOpen, FaConciergeBell,
  FaHandSparkles // <-- CORRECCIÓN AQUÍ
} from 'react-icons/fa'; // O podría ser de 'react-icons/fa6' si usas la versión más nueva

// Mapeo para convertir el string del diccionario al componente del ícono
const iconMap = {
  FaHome, FaBuilding, FaKey, FaBoxOpen, FaConciergeBell,
  FaSparkles: FaHandSparkles // <-- CORRECCIÓN AQUÍ: Mapea el string 'FaSparkles' al ícono correcto
};

// Subcomponente para cada tarjeta de servicio
const ServiceCard = ({ iconName, title, description, index }) => {
  // Usamos el iconMap para obtener el componente correcto
  const IconComponent = iconMap[iconName] || FaHandSparkles; // Usa FaHandSparkles como fallback también

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center flex flex-col items-center"
    >
      <div className="bg-secondary/10 p-4 rounded-full mb-4 inline-block">
        {/* Renderiza el componente correcto */}
        <IconComponent className="text-secondary text-3xl" />
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-muted text-sm flex-grow">{description}</p>
    </motion.div>
  );
};

// El resto del componente ServicesSection sigue igual...
export default function ServicesSection({ lang, dict }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.serviceList.map((service, index) => (
            <ServiceCard
              key={service.title}
              iconName={service.icon} // Mantenemos el string 'FaSparkles' del diccionario
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}