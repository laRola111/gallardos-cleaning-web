// src/components/organisms/ContactSection.js
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa'; // Íconos

// Datos de contacto (iguales a los del Footer)
const contactData = {
  phone: '737-618-8548',
  email: 'gallardoscleaninglpz@gmail.com',
  address: '9201 Cameron rd Austin Texas 78754',
  facebook: 'https://www.facebook.com/GallardosCleaning',
};

export default function ContactSection({ lang, dict }) {

  // Placeholder para la acción del formulario (no hará nada por ahora)
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submission functionality is not yet implemented.');
    // Aquí iría la lógica de envío si tuviéramos backend o Server Action
  };

  return (
    // Sección con ID para el enlace del navbar
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-background"> {/* Ligero gradiente */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Subtítulo */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, amount: 0.5 }}
           className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {dict.sectionTitle}
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {dict.sectionSubtitle}
          </p>
        </motion.div>

        {/* Contenido: Info + Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Columna 1: Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">{dict.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">{dict.formNameLabel}</Label>
                <Input id="name" name="name" type="text" required className="mt-1 w-full" placeholder={lang === 'es' ? 'Tu nombre...' : 'Your name...'}/>
              </div>
              <div>
                <Label htmlFor="email">{dict.formEmailLabel}</Label>
                <Input id="email" name="email" type="email" required className="mt-1 w-full" placeholder={lang === 'es' ? 'tu@email.com' : 'you@email.com'}/>
              </div>
              <div>
                <Label htmlFor="phone">{dict.formPhoneLabel}</Label>
                <Input id="phone" name="phone" type="tel" className="mt-1 w-full" placeholder={lang === 'es' ? 'Tu número...' : 'Your number...'}/>
              </div>
              <div>
                <Label htmlFor="message">{dict.formMessageLabel}</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full bg-background border border-gray-300 text-foreground px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={lang === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help?'}
                ></textarea>
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full text-base py-3">
                  {dict.formSubmitButton}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Columna 2: Información de Contacto */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: true, amount: 0.2 }}
             className="space-y-6"
          >
             <h3 className="text-2xl font-semibold text-foreground mb-4">{dict.contactInfoTitle}</h3>
              <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <div>
                      <h4 className="font-medium text-foreground">{dict.addressTitle}</h4>
                      <p className="text-muted text-sm">{contactData.address}</p>
                  </div>
              </div>
               <div className="flex items-start space-x-3">
                  <FaPhoneAlt className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <div>
                      <h4 className="font-medium text-foreground">{dict.phoneTitle}</h4>
                      <a href={`tel:${contactData.phone}`} className="text-muted text-sm hover:text-primary">{contactData.phone}</a>
                  </div>
              </div>
              <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <div>
                      <h4 className="font-medium text-foreground">{dict.emailTitle}</h4>
                      <a href={`mailto:${contactData.email}`} className="text-muted text-sm hover:text-primary">{contactData.email}</a>
                  </div>
              </div>
              {/* Redes Sociales */}
              <div>
                 <h4 className="font-medium text-foreground mb-2">{dict.socialTitle}</h4>
                 <a
                    href={contactData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-muted hover:text-primary transition-colors text-sm"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={20} />
                    <span>Facebook</span>
                  </a>
                  {/* Añadir más redes si es necesario */}
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}