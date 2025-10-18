// src/lib/dictionaries.js
// Importamos 'dynamic' de 'next/dynamic' para cargar los diccionarios
import dynamic from 'next/dynamic';

// Usamos import() dinámico para cargar solo el diccionario necesario
const dictionaries = {
  en: () => import('@/dictionaries/en.js').then((module) => module.dictionary),
  es: () => import('@/dictionaries/es.js').then((module) => module.dictionary),
};

export const getDictionary = async (lang) => {
  // Si el idioma no es 'en' o 'es', usamos 'es' por defecto.
  const langKey = dictionaries[lang] ? lang : 'es';
  return dictionaries[langKey]();
};