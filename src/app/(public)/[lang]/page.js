// src/app/(public)/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import WhyChooseUsSection from '@/components/organisms/WhyChooseUsSection';
import AboutSection from '@/components/organisms/AboutSection';
import ProcessSection from '@/components/organisms/ProcessSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection';
import ServiceAreaSection from '@/components/organisms/ServiceAreaSection';
import FAQSection from '@/components/organisms/FAQSection';
import ContactSection from '@/components/organisms/ContactSection'; // Importar la sección

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <ServicesSection lang={lang} dict={dict.services} />
      <WhyChooseUsSection lang={lang} dict={dict.whyChooseUs} />
      <AboutSection lang={lang} dict={dict.about} />
      <ProcessSection lang={lang} dict={dict.process} />
      <TestimonialsSection lang={lang} dict={dict.testimonials} />
      <ServiceAreaSection lang={lang} dict={dict.serviceArea} />
      <FAQSection lang={lang} dict={dict.faq} />
      <ContactSection lang={lang} dict={dict.contact} /> {/* Añadir la sección aquí */}
    </>
  );
}