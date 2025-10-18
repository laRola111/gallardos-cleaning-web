// src/components/organisms/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import logo from "../../../public/gallardoLogo.png"

export default function Header({ lang, dict }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);

  // Efecto para visibilidad del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;
      const isScrollingUp = currentYPos < lastYPos;
      // Hacer visible si se sube el scroll o si está muy cerca del top
      setIsVisible(isScrollingUp || currentYPos < 50);
      setLastYPos(currentYPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  // Efecto para cerrar menú al cambiar de ruta
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Efecto para bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Enlaces de navegación desde el diccionario
  const navLinks = [
    { name: dict.home, href: `/${lang}/#hero` }, // Usamos anclas para secciones
    { name: dict.services, href: `/${lang}/#services` },
    { name: dict.about, href: `/${lang}/#about` },
    { name: dict.reviews, href: `/${lang}/#reviews` },
    { name: dict.contact, href: `/${lang}/#contact` },
  ];

  // Función para manejar clicks en enlaces (scroll suave para anclas)
  const handleLinkClick = (e, href) => {
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMenuOpen(false); // Cierra el menú móvil al hacer click
    } else {
      setIsMenuOpen(false); // Cierra el menú si es un enlace normal
    }
  };


  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } `}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0 flex items-center">
            {/* Ajusta width/height según necesites */}
            <Image src={logo} alt="Gallardos Cleaning Logo" width={160} height={40} priority className="h-10 w-auto" />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-muted hover:text-primary transition-colors"
                // Añadir lógica para resaltar enlace activo si es necesario
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botones Derecha (Idioma, Contacto Rápido, Menú Móvil) */}
          <div className="flex items-center space-x-4">
            {/* <div className="hidden md:block"> */}
              {/* <LanguageSwitcher />  // Placeholder para el switcher */}
            {/* </div> */}
             <div className="hidden sm:block">
                 {/* Botón de Contacto Rápido podría ir aquí */}
             </div>
            {/* Botón Menú Móvil */}
            <button
              className="md:hidden text-muted hover:text-primary z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Panel Menú Móvil */}
      <div
        className={`fixed inset-0 bg-background z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {/* <div className="mt-8"> */}
             {/* <LanguageSwitcher /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}