// src/components/organisms/ContactSection.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Datos de contacto
const contactData = {
  phone: '737-618-8548',
  email: 'gallardoscleaninglpz@gmail.com',
  address: '9201 Cameron rd Austin Texas 78754',
  facebook: 'https://www.facebook.com/GallardosCleaning',
};

// Estado inicial del formulario
const INITIAL_FORM = { name: '', email: '', phone: '', message: '' };

export default function ContactSection({ lang, dict }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData(INITIAL_FORM); // Limpia el formulario tras éxito
    } catch (err) {
      console.error('[ContactSection] Submit error:', err);
      setStatus('error');
      setErrorMessage(
        lang === 'es'
          ? 'Ocurrió un error al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente.'
          : 'There was an error sending your message. Please try again or contact us directly.'
      );
    }
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-background">
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

        {/* Contenido: Formulario + Info */}
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

            {/* Mensaje de éxito */}
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                <FaCheckCircle className="text-green-500 text-5xl" />
                <p className="text-xl font-semibold text-foreground">
                  {lang === 'es' ? '¡Mensaje enviado!' : 'Message Sent!'}
                </p>
                <p className="text-muted text-sm">
                  {lang === 'es'
                    ? 'Gracias por contactarnos. Te responderemos a la brevedad posible.'
                    : 'Thank you for reaching out. We will get back to you shortly.'}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-primary underline hover:text-primary-light transition-colors"
                >
                  {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <Label htmlFor="contact-name">{dict.formNameLabel}</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full"
                    placeholder={lang === 'es' ? 'Tu nombre...' : 'Your name...'}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">{dict.formEmailLabel}</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full"
                    placeholder={lang === 'es' ? 'tu@email.com' : 'you@email.com'}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">{dict.formPhoneLabel}</Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full"
                    placeholder={lang === 'es' ? 'Tu número...' : 'Your number...'}
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">{dict.formMessageLabel}</Label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 w-full bg-background border border-gray-300 text-foreground px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder={lang === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help?'}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>

                {/* Mensaje de error */}
                {status === 'error' && (
                  <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <FaExclamationCircle className="flex-shrink-0 mt-0.5 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full text-base py-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? (dict.formSending || (lang === 'es' ? 'Enviando...' : 'Sending...'))
                      : dict.formSubmitButton}
                  </Button>
                </div>
              </form>
            )}
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
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}