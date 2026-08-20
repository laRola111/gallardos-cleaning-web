// src/components/organisms/VideoSection.js
'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fix React bug: muted prop no se aplica correctamente en <video>.
  // Se establece imperativament via ref al montar el componente.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      try {
        setIsLoading(true);
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        // Si falla por autoplay policy, intentar con mute
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
          setIsPlaying(true);
        } catch (e) {
          console.error('Video play failed:', e);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleEnded = () => setIsPlaying(false);
  const handlePause = () => setIsPlaying(false);
  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="flex flex-col items-center">
      {/* Contenedor de video vertical (9:16) centrado */}
      <div className="relative w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-black"
           style={{ aspectRatio: '9/16' }}>

        {/* Video vertical */}
        <video
          ref={videoRef}
          src={src}
          playsInline
          preload="metadata"
          onEnded={handleEnded}
          onPause={handlePause}
          onPlay={handlePlay}
          className="absolute inset-0 w-full h-full object-contain bg-black"
          aria-label={title}
        />

        {/* Overlay de controles */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/70 via-transparent to-black/20">
          {/* Título arriba */}
          <p className="text-white text-xs font-semibold leading-snug drop-shadow-md line-clamp-2">
            {title}
          </p>

          {/* Botón play central cuando está pausado */}
          {!isPlaying && !isLoading && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Reproducir video"
            >
              <span className="bg-white/90 hover:bg-white text-primary rounded-full p-5 shadow-lg transition-transform hover:scale-110 duration-200">
                <FaPlay size={24} className="ml-1" />
              </span>
            </button>
          )}

          {/* Spinner mientras carga */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Controles abajo */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Descripción debajo */}
      <p className="mt-3 text-sm text-muted text-center max-w-[320px]">
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

        {/* Grid de videos verticales — 2 columnas lado a lado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {videos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
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
