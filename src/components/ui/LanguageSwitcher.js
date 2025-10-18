// src/components/ui/LanguageSwitcher.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGlobeAmericas } from 'react-icons/fa'; // Ícono de globo

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Extrae el idioma actual ('es' o 'en') de la ruta
  const pathSegments = pathname.split('/');
  const currentLang = pathSegments[1] || 'es'; // 'es' por defecto si no hay prefijo

  // Determina el idioma al que se cambiará
  const targetLang = currentLang === 'es' ? 'en' : 'es';

  // Reconstruye la ruta con el nuevo idioma
  // Si hay más segmentos (ej. /es/alguna-pagina), los mantiene
  const newPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);

  // Texto a mostrar en el botón
  const buttonText = targetLang === 'en' ? 'English' : 'Español';

  return (
    <Link
      href={newPath}
      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-muted hover:bg-gray-100 hover:text-foreground transition-colors"
      aria-label={`Change language to ${buttonText}`}
    >
      <FaGlobeAmericas />
      <span>{buttonText}</span>
    </Link>
  );
}