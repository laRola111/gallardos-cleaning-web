// src/components/organisms/VideoSection.js
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const videos = [
  {
    src: '/gallardos-cleaning-professional-service-austin-tx.mp4',
    titleKey: 'video1Title',
    descKey: 'video1Desc',
    poster: '/bannerGallardos.webp',
  },
  {
    src: '/gallardos-cleaning-deep-cleaning-results-austin.mp4',
    titleKey: 'video2Title',
    descKey: 'video2Desc',
    poster: '/bannerGallardos.webp',
  },
];

function VideoPlayer({ src, poster, title, description }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted((prev) => !prev);
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg bg-black">
      {/* Video element — preload=none para ahorrar CPU/red */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        playsInline
        preload="none"
        onEnded={handleEnded}
        className="w-full aspect-video object-cover"
        aria-label={title}
      />

      {/* Overlay de controles */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity">
        {/* Título del video */}
        <div className="text-white text-sm font-semibold drop-shadow-md">
          {title}
        </div>

        {/* Controles inferiores */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </button>
        </div>
      </div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <VideoPlayer
                src={video.src}
                poster={video.poster}
                title={dict[video.titleKey]}
                description={dict[video.descKey]}
              />
              <p className="mt-3 text-sm text-muted text-center">
                {dict[video.descKey]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
