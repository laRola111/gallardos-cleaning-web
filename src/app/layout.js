// src/app/layout.js
import './globals.css';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: {
    default: 'Gallardos Cleaning | Professional Cleaning Services Austin TX',
    template: '%s | Gallardos Cleaning',
  },
  description:
    'Gallardos Cleaning offers professional residential, commercial, Airbnb, and deep cleaning services in Austin, TX and surrounding areas. Get your free quote today!',
  keywords: [
    'cleaning services Austin TX',
    'professional cleaners Austin',
    'residential cleaning Austin',
    'deep cleaning Austin TX',
    'Airbnb cleaning Austin',
    'move-in move-out cleaning Austin',
    'Gallardos Cleaning',
    'limpieza profesional Austin TX',
  ],
  authors: [{ name: 'Gallardos Cleaning' }],
  creator: 'Gallardos Cleaning',
  publisher: 'Gallardos Cleaning',
  metadataBase: new URL('https://gallardoscleaning.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-MX': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    url: 'https://gallardoscleaning.com',
    siteName: 'Gallardos Cleaning',
    title: 'Gallardos Cleaning | Professional Cleaning Services Austin TX',
    description:
      'Professional residential, commercial, and deep cleaning services in Austin, TX. Over 5 years of experience. Get your free quote!',
    images: [
      {
        url: '/bannerGallardos.webp',
        width: 1200,
        height: 630,
        alt: 'Gallardos Cleaning — Professional Cleaning Services Austin TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallardos Cleaning | Professional Cleaning Services Austin TX',
    description:
      'Professional cleaning services in Austin, TX. Residential, deep cleaning, Airbnb & more.',
    images: ['/bannerGallardos.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}