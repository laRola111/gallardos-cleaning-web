// src/app/layout.js
import './globals.css'; // <-- ESTA LÍNEA ES ESENCIAL
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: 'Gallardos Cleaning',
  description: 'Servicios profesionales de limpieza en Austin, TX.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}