// src/components/organisms/ServiceAreaSection.js
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button'; // Importar botón para el CTA
import { FaMapMarkerAlt } from 'react-icons/fa'; // Ícono de marcador

export default function ServiceAreaSection({ lang, dict }) {

  // Función para scroll suave al botón de contacto
  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Sección con ID (opcional)
    <section id="service-area" className="py-16 md:py-24 bg-background"> {/* Fondo blanco */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              {dict.sectionTitle}
            </h2>
            <p className="text-lg text-muted mb-6">
              {dict.sectionSubtitle}
            </p>
            <div className="space-y-4 text-muted">
              <p className="font-semibold text-foreground flex items-center">
                <FaMapMarkerAlt className="text-secondary mr-2" /> {dict.mainArea}
              </p>
              {dict.surroundingAreasList && dict.surroundingAreasList.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{dict.surroundingAreasTitle}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {dict.surroundingAreasList.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
              )}
               <p className="text-sm pt-4">{dict.checkAreaText}</p>
                <Button
                    onClick={handleScrollToContact}
                    variant="ghost" // Estilo más sutil para este botón
                    className="!px-0 !py-1 text-base" // Ajuste de padding
                >
                    {lang === 'es' ? 'Pregúntanos Aquí' : 'Ask Us Here'}
                </Button>
            </div>
          </motion.div>

          {/* Columna de Mapa Placeholder (o imagen) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center text-muted shadow" // Placeholder visual
          >
            {/* Aquí podríamos integrar un mapa de Google Maps o similar más adelante */}
            <FaMapMarkerAlt size={60} className="opacity-30" />
            <span className="absolute bottom-4 text-xs">Map Placeholder</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}