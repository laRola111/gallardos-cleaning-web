// src/lib/dictionaries.js
// Carga dinámica de diccionarios: solo se importa el idioma necesario,
// reduciendo el bundle por idioma (tree-shaking efectivo en el servidor).
const dictionaries = {
  en: () => import('@/dictionaries/en.js').then((m) => m.dictionary),
  es: () => import('@/dictionaries/es.js').then((m) => m.dictionary),
};

/**
 * Devuelve el diccionario para el idioma dado.
 * Si el idioma no existe, cae al español como idioma por defecto.
 * @param {string} lang - Código de idioma ('en' | 'es')
 * @returns {Promise<object>} Diccionario de traducciones
 */
export const getDictionary = async (lang) => {
  const loader = dictionaries[lang] ?? dictionaries['es'];
  return loader();
};