// src/dictionaries/es.js
export const dictionary = {
  navbar: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    reviews: 'Reseñas',
    contact: 'Contacto',
  },
  footer: {
    description: 'Servicios profesionales de limpieza en Austin, TX.',
    contactInfo: 'Información de Contacto',
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados.',
  },
  hero: { // NUEVA SECCIÓN
    heroTitle: "Limpieza Profesional para tu Hogar y Negocio en Austin",
    heroSubtitle: "Más de 5 años de experiencia brindando espacios impecables. Ofrecemos limpieza normal, profunda, mudanzas y más.",
    heroButton: "Obtén tu Cotización Gratis",
    heroAlt: "Equipo de limpieza profesional trabajando",
  },
  services: { // NUEVA SECCIÓN
    sectionTitle: "Nuestros Servicios de Limpieza",
    sectionSubtitle: "Ofrecemos soluciones adaptadas a cada necesidad, garantizando espacios impecables y frescos.",
    serviceList: [
      {
        icon: "FaHome", // Usaremos nombres de íconos de React Icons
        title: "Limpieza Residencial",
        description: "Limpieza regular o profunda para casas y apartamentos. Mantenemos tu hogar reluciente."
      },
      {
        icon: "FaBuilding",
        title: "Limpieza de Oficinas",
        description: "Espacios de trabajo limpios y ordenados para mejorar la productividad y el bienestar."
      },
      {
        icon: "FaKey",
        title: "Limpieza Airbnb",
        description: "Preparamos tu propiedad para recibir a tus huéspedes con la máxima calidad y rapidez."
      },
      {
        icon: "FaBoxOpen",
        title: "Limpieza de Mudanza",
        description: "Facilitamos tu mudanza con limpiezas profundas de entrada (Move-In) o salida (Move-Out)."
      },
      {
        icon: "FaConciergeBell",
        title: "Casas Vacacionales",
        description: "Mantenimiento y limpieza de propiedades vacacionales para asegurar una estancia perfecta."
      },
      {
        icon: "FaSparkles", // Ícono genérico para limpieza profunda
        title: "Limpieza Profunda (Deep Cleaning)",
        description: "Servicio detallado que cubre áreas a menudo olvidadas. Ideal para una limpieza a fondo."
      }
    ]
  },
  whyChooseUs: { // NUEVA SECCIÓN
    sectionTitle: "¿Por Qué Elegir Gallardos Cleaning?",
    sectionSubtitle: "Nos comprometemos a brindar un servicio excepcional y resultados impecables.",
    points: [
      {
        icon: "FaAward", // Ícono para Experiencia/Calidad
        title: "Más de 5 Años de Experiencia",
        description: "Experiencia comprobada trabajando tanto para compañías como de forma independiente, garantizando calidad."
      },
      {
        icon: "FaUsers", // Ícono para Confianza/Trato Personal
        title: "Trato Confiable y Personalizado",
        description: "Como negocio propio, ofrecemos un servicio cercano y adaptado a tus necesidades específicas."
      },
      {
        icon: "FaLeaf", // Ícono para Cuidado/Detalle
        title: "Atención al Detalle",
        description: "Nos enfocamos en cada rincón para asegurar una limpieza completa y satisfactoria."
      },
      {
        icon: "FaClock", // Ícono para Flexibilidad/Puntualidad
        title: "Flexibilidad y Puntualidad",
        description: "Nos adaptamos a tus horarios y garantizamos un servicio eficiente y puntual."
      }
    ],
    ctaButton: "Contáctanos Hoy"
  },
  about: { // NUEVA SECCIÓN
    sectionTitle: "Nuestra Historia",
    paragraph1: "Comencé trabajando para compañías de limpieza, adquiriendo valiosa experiencia en el sector.",
    paragraph2: "Decidí emprender y poner mi propia empresa, llamándola Gallardos Cleaning, con la misión de ofrecer un servicio de limpieza confiable y de alta calidad.",
    paragraph3: "Tengo más de 5 años de experiencia dedicados a transformar espacios y superar las expectativas de mis clientes.",
    imageAlt: "Retrato de la fundadora de Gallardos Cleaning" // Texto alternativo para la imagen
  },
  process: { // NUEVA SECCIÓN
    sectionTitle: "Nuestro Proceso Simplificado",
    sectionSubtitle: "Contratar nuestros servicios es fácil y rápido. Sigue estos simples pasos:",
    steps: [
      {
        icon: "FaPhoneVolume", // Ícono para Contacto
        title: "Paso 1: Contáctanos",
        description: "Llámanos o envíanos un mensaje a través de nuestro formulario con los detalles de lo que necesitas."
      },
      {
        icon: "FaFileInvoiceDollar", // Ícono para Cotización
        title: "Paso 2: Recibe tu Cotización",
        description: "Te enviaremos una cotización clara y detallada basada en tus requerimientos, sin compromiso."
      },
      {
        icon: "FaCalendarCheck", // Ícono para Agendar
        title: "Paso 3: Agenda tu Limpieza",
        description: "Elige la fecha y hora que mejor te convenga. ¡Nos adaptamos a tu horario!"
      },
      {
        icon: "FaSmileBeam", // Ícono para Disfrutar
        title: "Paso 4: ¡Disfruta!",
        description: "Relájate mientras nuestro equipo deja tu espacio impecable y reluciente."
      }
    ]
  },
  testimonials: { // NUEVA SECCIÓN
    sectionTitle: "Lo Que Dicen Nuestros Clientes",
    sectionSubtitle: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación.",
    items: [
      {
        quote: "¡Servicio increíble! Mi casa nunca había estado tan limpia. El equipo fue muy profesional y detallista.",
        author: "Cliente Satisfecho",
        location: "Austin, TX" // Opcional: Ubicación
      },
      {
        quote: "Gallardos Cleaning se encargó de la limpieza de mudanza y fue un alivio total. ¡Recomendados!",
        author: "Residente Feliz",
        location: "Austin, TX"
      },
      {
        quote: "Puntuales, eficientes y el resultado impecable. Contrataré sus servicios regularmente para mi oficina.",
        author: "Negocio Local",
        location: "Austin, TX"
      }
    ]
  },
  serviceArea: { // NUEVA SECCIÓN
    sectionTitle: "Área de Servicio",
    sectionSubtitle: "Ofrecemos nuestros servicios de limpieza profesional en Austin, Texas y sus alrededores.",
    checkAreaText: "¿No estás seguro si cubrimos tu zona? ¡Contáctanos!",
    mainArea: "Austin, TX (incluyendo 78754)",
    surroundingAreasTitle: "También servimos en áreas cercanas como:", // Opcional
    surroundingAreasList: [ // Lista de ejemplo, ajustar según necesidad
      "Pflugerville",
      "Round Rock",
      "Cedar Park",
      "Leander",
      // Añadir más si es relevante
    ]
  },
  faq: { // NUEVA SECCIÓN
    sectionTitle: "Preguntas Frecuentes",
    sectionSubtitle: "¿Tienes dudas? Aquí respondemos las preguntas más comunes sobre nuestros servicios.",
    items: [
      {
        question: "¿Qué tipos de servicios de limpieza ofrecen?",
        answer: "Ofrecemos una amplia gama, incluyendo limpieza residencial (normal y profunda), limpieza de oficinas, Airbnb, mudanzas (entrada/salida) y casas vacacionales."
      },
      {
        question: "¿Necesito proporcionar los productos de limpieza?",
        answer: "No es necesario. Llevamos nuestros propios productos y equipos de limpieza profesionales. Si tienes alguna preferencia específica (ej. productos ecológicos), por favor menciónalo al solicitar la cotización."
      },
      {
        question: "¿Cómo calculan el precio?",
        answer: "El precio se basa en el tamaño del espacio, el tipo de limpieza solicitada (normal vs. profunda), la frecuencia y cualquier servicio adicional requerido. Contáctanos para una cotización personalizada y gratuita."
      },
      {
        question: "¿Están asegurados?",
        answer: "Sí, Gallardos Cleaning cuenta con el seguro necesario para proteger tu propiedad y a nuestro equipo durante el servicio."
      }
    ]
  },
  contact: { // NUEVA SECCIÓN
    sectionTitle: "Ponte en Contacto",
    sectionSubtitle: "Estamos listos para ayudarte a conseguir un espacio impecable. ¡Envíanos un mensaje o llámanos!",
    formTitle: "Envíanos un Mensaje",
    formNameLabel: "Nombre Completo",
    formEmailLabel: "Correo Electrónico",
    formPhoneLabel: "Teléfono (Opcional)",
    formMessageLabel: "Mensaje",
    formSubmitButton: "Enviar Mensaje",
    formSending: "Enviando...", // Para estado de envío futuro
    contactInfoTitle: "Información de Contacto",
    addressTitle: "Dirección",
    phoneTitle: "Teléfono",
    emailTitle: "Correo Electrónico",
    socialTitle: "Síguenos"
  },
};