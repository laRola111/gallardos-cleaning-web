// src/components/organisms/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, /* FaInstagram, FaTiktok */ } from 'react-icons/fa'; // Añade íconos según necesites
import logo from "../../../public/gallardoLogo.png"

// Simulación de datos (reemplazar con datos reales o del diccionario)
const contactData = {
  phone: '737-618-8548',
  email: 'gallardoscleaninglpz@gmail.com',
  address: '9201 Cameron rd Austin Texas 78754',
  facebook: 'https://www.facebook.com/GallardosCleaning', // Asegúrate que el link sea correcto
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted hover:text-primary transition-colors"
    aria-label={label}
  >
    <Icon size={22} />
  </a>
);

export default function Footer({ lang, dict }) {
  const currentYear = new Date().getFullYear();

  // Enlaces de navegación rápidos (podrían venir del dict también)
  const quickLinks = [
    { name: dict.navbar.home, href: `/${lang}/#hero` },
    { name: dict.navbar.services, href: `/${lang}/#services` },
    { name: dict.navbar.about, href: `/${lang}/#about` },
    { name: dict.navbar.contact, href: `/${lang}/#contact` },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <Link href={`/${lang}`} className="inline-block">
              <Image src={logo} alt="Gallardos Cleaning Logo" width={180} height={45} className="h-11 w-auto" />
            </Link>
            <p className="text-sm">{dict.footer.description}</p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:justify-self-center">
            <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:justify-self-center">
             <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.contactInfo}</h3>
             <address className="space-y-2 text-sm not-italic">
               <p>{contactData.address}</p>
               <p><a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a></p>
               <p><a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a></p>
             </address>
          </div>

           {/* Columna 4: Redes Sociales */}
           <div className="md:col-span-3 lg:col-span-1 lg:justify-self-end">
             <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.followUs}</h3>
             <div className="flex space-x-4">
               {contactData.facebook && <SocialLink href={contactData.facebook} icon={FaFacebookF} label="Facebook"/>}
               {/* Añadir Instagram, TikTok si existen */}
               {/* {contactData.instagram && <SocialLink href={contactData.instagram} icon={FaInstagram} label="Instagram"/>} */}
               {/* {contactData.tiktok && <SocialLink href={contactData.tiktok} icon={FaTiktok} label="TikTok"/>} */}
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs">
          <p>&copy; {currentYear} Gallardos Cleaning. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}