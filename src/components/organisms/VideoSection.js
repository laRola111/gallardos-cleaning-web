// src/components/organisms/VideoSection.js
'use client';

import { motion } from 'framer-motion';

const videos = [
  {
    id: 'PcLbcBK3oow',
    titleKey: 'video1Title',
    descKey: 'video1Desc',
  },
  {
    id: 'X1Vb0x40Y-s',
    titleKey: 'video2Title',
    descKey: 'video2Desc',
  },
];

function YouTubePlayer({ id, title, description }) {
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
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              className="w-full flex justify-center"
            >
              <YouTubePlayer
                id={video.id}
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
