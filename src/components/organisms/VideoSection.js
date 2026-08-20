// src/components/organisms/VideoSection.js
'use client';

import { motion } from 'framer-motion';

const videos = [
  {
    src: '/gallardos-cleaning-professional-service-austin-tx.mp4',
    titleKey: 'video1Title',
    descKey: 'video1Desc',
  },
  {
    src: '/gallardos-cleaning-deep-cleaning-results-austin.mp4',
    titleKey: 'video2Title',
    descKey: 'video2Desc',
  },
];

function VideoPlayer({ src, title, description }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Título */}
      <p className="text-sm font-semibold text-primary mb-3 text-center px-2">
        {title}
      </p>

      {/* Contenedor vertical 9:16 */}
      <div
        className="relative w-full max-w-[300px] rounded-2xl overflow-hidden shadow-xl bg-black"
        style={{ aspectRatio: '9 / 16' }}
      >
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'contain', background: '#000' }}
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      </div>

      {/* Descripción */}
      <p className="mt-3 text-xs text-muted text-center max-w-[300px] px-2">
        {description}
      </p>
    </div>
  );
}

export default function VideoSection({ lang, dict }) {
  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2
            id="videos-heading"
            className="text-3xl md:text-4xl font-extrabold text-primary mb-3"
          >
            {dict.sectionTitle}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {dict.sectionSubtitle}
          </p>
        </motion.div>

        {/* Grid — 2 videos verticales lado a lado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {videos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              className="w-full flex justify-center"
            >
              <VideoPlayer
                src={video.src}
                title={dict[video.titleKey]}
                description={dict[video.descKey]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
