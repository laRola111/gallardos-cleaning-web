/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Performance ───────────────────────────────────────────────────────────
  // Compresión de respuestas (gzip) — reduce tamaño de transferencia
  compress: true,

  // Optimización de imágenes: formatos modernos para menor peso
  images: {
    formats: ['image/avif', 'image/webp'],
    // Dispositivos más comunes para srcset eficiente
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimiza re-generación de imágenes en caché (1 semana)
    minimumCacheTTL: 604800,
  },

  // ─── Seguridad (HTTP Headers) ────────────────────────────────────────────
  async headers() {
    return [
      {
        // Aplica a todas las rutas
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Cache agresiva para assets estáticos de Next.js
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache para archivos estáticos del /public (imágenes, videos, etc.)
        source: '/(.*\\.(?:ico|png|jpg|jpeg|gif|webp|avif|svg|mp4|webm|woff|woff2))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },

  // ─── Redirects: asegura que / vaya a /es ────────────────────────────────
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: false,
      },
    ];
  },

  // ─── Bundle ──────────────────────────────────────────────────────────────
  // Reduce tamaño del bundle eliminando código no usado en producción
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
};

export default nextConfig;
