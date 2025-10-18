// src/components/organisms/FAQSection.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Íconos para expandir/colapsar

// Subcomponente para cada item de FAQ
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.1 }}
      className="border-b border-gray-200 py-5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground">{question}</span>
        <span className="text-primary">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '1rem' },
              collapsed: { opacity: 0, height: 0, marginTop: '0rem' },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted pr-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection({ lang, dict }) {
  return (
    // Sección con ID (opcional)
    <section id="faq" className="py-16 md:py-24 bg-gray-50"> {/* Fondo gris claro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Subtítulo */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, amount: 0.5 }}
           className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {dict.sectionTitle}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {dict.sectionSubtitle}
          </p>
        </motion.div>

        {/* Lista de FAQs */}
        <div className="w-full">
          {dict.items.map((item, index) => (
            <FAQItem
              key={index} // Usar índice está bien para esta lista estática
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}