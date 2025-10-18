// src/middleware.js
import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\\.(.*)$/;
const availableLanguages = ['en', 'es'];
const defaultLanguage = 'es'; // Español como predeterminado

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Omitir archivos públicos, rutas de API y archivos de Next.js
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = availableLanguages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirigir a la URL con el idioma predeterminado
  // Ejemplo: /about -> /es/about
  request.nextUrl.pathname = `/${defaultLanguage}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Omitir todas las rutas internas (_next) y assets
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};