// src/components/organisms/AboutSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Placeholder - Reemplaza con la ruta a tu imagen real si la tienes
import logo from "../../../public/gallardoLogo.png"


export default function AboutSection({ lang, dict }) {
  return (
    // Sección con ID para el enlace del navbar
    <section id="about" className="py-16 md:py-24 bg-gray-50 overflow-hidden"> {/* Fondo gris claro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              {dict.sectionTitle}
            </h2>
            <div className="space-y-4 text-muted">
              <p>{dict.paragraph1}</p>
              <p>{dict.paragraph2}</p>
              <p>{dict.paragraph3}</p>
            </div>
          </motion.div>

          {/* Columna de Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={logo} // Usa la variable definida arriba
              alt={dict.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 400px) 50vw, 10vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}