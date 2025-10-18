// src/components/organisms/TestimonialsSection.js
'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; // Íconos para estrellas y comillas

// Subcomponente para cada tarjeta de testimonio
const TestimonialCard = ({ quote, author, location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col" // Tarjeta con sombra
    >
      <FaQuoteLeft className="text-secondary text-2xl mb-4 opacity-50" /> {/* Comilla con color secundario */}
      <p className="text-muted italic flex-grow mb-5">&quot;{quote}&quot;</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div>
           <p className="font-semibold text-foreground">{author}</p>
           {location && <p className="text-xs text-muted">{location}</p>}
        </div>
        <div className="flex text-secondary"> {/* Estrellas con color secundario */}
          {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection({ lang, dict }) {
  return (
    // Sección con ID para el enlace del navbar
    <section id="reviews" className="py-16 md:py-24 bg-gray-50"> {/* Fondo gris claro */}
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

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.items.map((item, index) => (
            <TestimonialCard
              key={index} // Usar índice como key ya que son placeholders
              quote={item.quote}
              author={item.author}
              location={item.location}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}