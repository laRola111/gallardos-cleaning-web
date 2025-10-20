// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import banner from "../../../public/bannerGallardos.webp"

// NO necesitas importar la imagen así:
// import heroBg from '/images/hero-background.jpg'; // <-- ELIMINA ESTA LÍNEA

export default function HeroSection({ lang, dict }) {
  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-[70vh] min-h-[500px] flex items-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          // USA LA RUTA ABSOLUTA DESDE /public
          src={banner}
          alt={dict.heroAlt || "Fondo de servicio de limpieza profesional"}
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ... (el resto del componente sigue igual) ... */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          {dict.heroTitle || "Título del Hero"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-200 mb-8"
        >
          {dict.heroSubtitle || "Subtítulo descriptivo del servicio"}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            onClick={handleScrollToContact}
            variant="secondary"
            className="text-lg px-8 py-3 shadow-lg"
          >
            {dict.heroButton || "Solicitar Cotización"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}