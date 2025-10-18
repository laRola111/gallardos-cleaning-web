// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    reviews: 'Reviews',
    contact: 'Contact',
  },
  footer: {
    description: 'Professional cleaning services in Austin, TX.',
    contactInfo: 'Contact Info',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    rights: 'All rights reserved.',
  },
  hero: { // NEW SECTION
    heroTitle: "Professional Cleaning for Your Home & Business in Austin",
    heroSubtitle: "Over 5 years of experience providing spotless spaces. We offer standard, deep cleaning, move-in/out, and more.",
    heroButton: "Get Your Free Quote",
    heroAlt: "Professional cleaning team working",
  },
  services: { // NEW SECTION
    sectionTitle: "Our Cleaning Services",
    sectionSubtitle: "We offer tailored solutions for every need, ensuring spotless and fresh spaces.",
    serviceList: [
      {
        icon: "FaHome",
        title: "Residential Cleaning",
        description: "Regular or deep cleaning for houses and apartments. We keep your home sparkling."
      },
      {
        icon: "FaBuilding",
        title: "Office Cleaning",
        description: "Clean and tidy workspaces to improve productivity and well-being."
      },
      {
        icon: "FaKey",
        title: "Airbnb Cleaning",
        description: "We prepare your property to welcome guests with the highest quality and speed."
      },
      {
        icon: "FaBoxOpen",
        title: "Move-In / Move-Out Cleaning",
        description: "We facilitate your move with deep cleaning for moving in or moving out."
      },
      {
        icon: "FaConciergeBell",
        title: "Vacation Homes",
        description: "Maintenance and cleaning of vacation properties to ensure a perfect stay."
      },
      {
        icon: "FaSparkles",
        title: "Deep Cleaning",
        description: "Detailed service covering often overlooked areas. Ideal for a thorough clean."
      }
    ]
  },
  whyChooseUs: { // NEW SECTION
    sectionTitle: "Why Choose Gallardos Cleaning?",
    sectionSubtitle: "We are committed to providing exceptional service and impeccable results.",
    points: [
      {
        icon: "FaAward",
        title: "Over 5 Years of Experience",
        description: "Proven experience working both for companies and independently, ensuring quality."
      },
      {
        icon: "FaUsers",
        title: "Trustworthy & Personalized Service",
        description: "As our own business, we offer a close and tailored service to your specific needs."
      },
      {
        icon: "FaLeaf",
        title: "Attention to Detail",
        description: "We focus on every corner to ensure a complete and satisfactory cleaning."
      },
      {
        icon: "FaClock",
        title: "Flexibility & Punctuality",
        description: "We adapt to your schedule and guarantee efficient and punctual service."
      }
    ],
    ctaButton: "Contact Us Today"
  },
  about: { // NEW SECTION
    sectionTitle: "Our Story",
    paragraph1: "I started working for cleaning companies, gaining valuable experience in the industry.",
    paragraph2: "I decided to start my own business, calling it Gallardos Cleaning, with the mission of offering reliable, high-quality cleaning services.",
    paragraph3: "I have over 5 years of experience dedicated to transforming spaces and exceeding my clients' expectations.",
    imageAlt: "Portrait of the founder of Gallardos Cleaning" // Alt text for the image
  },
  process: { // NEW SECTION
    sectionTitle: "Our Simplified Process",
    sectionSubtitle: "Hiring our services is easy and fast. Follow these simple steps:",
    steps: [
      {
        icon: "FaPhoneVolume",
        title: "Step 1: Contact Us",
        description: "Call us or send us a message through our form with the details of what you need."
      },
      {
        icon: "FaFileInvoiceDollar",
        title: "Step 2: Receive Your Quote",
        description: "We'll send you a clear and detailed quote based on your requirements, with no obligation."
      },
      {
        icon: "FaCalendarCheck",
        title: "Step 3: Schedule Your Cleaning",
        description: "Choose the date and time that works best for you. We adapt to your schedule!"
      },
      {
        icon: "FaSmileBeam",
        title: "Step 4: Enjoy!",
        description: "Relax while our team leaves your space spotless and sparkling clean."
      }
    ]
  },
  testimonials: { // NEW SECTION
    sectionTitle: "What Our Clients Say",
    sectionSubtitle: "Our clients' satisfaction is our best endorsement.",
    items: [
      {
        quote: "Amazing service! My house has never been cleaner. The team was very professional and detail-oriented.",
        author: "Satisfied Customer",
        location: "Austin, TX"
      },
      {
        quote: "Gallardos Cleaning handled our move-out cleaning, and it was a total relief. Highly recommended!",
        author: "Happy Resident",
        location: "Austin, TX"
      },
      {
        quote: "Punctual, efficient, and the result was impeccable. I will hire their services regularly for my office.",
        author: "Local Business",
        location: "Austin, TX"
      }
    ]
  },
  serviceArea: { // NEW SECTION
    sectionTitle: "Service Area",
    sectionSubtitle: "We offer our professional cleaning services in Austin, Texas and surrounding areas.",
    checkAreaText: "Not sure if we cover your area? Contact us!",
    mainArea: "Austin, TX (including 78754)",
    surroundingAreasTitle: "We also serve nearby areas such as:", // Optional
    surroundingAreasList: [ // Example list, adjust as needed
      "Pflugerville",
      "Round Rock",
      "Cedar Park",
      "Leander",
      // Add more if relevant
    ]
  },
  faq: { // NEW SECTION
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Have questions? Here we answer the most common inquiries about our services.",
    items: [
      {
        question: "What types of cleaning services do you offer?",
        answer: "We offer a wide range, including residential cleaning (standard and deep), office cleaning, Airbnb turnovers, move-in/move-out cleaning, and vacation homes."
      },
      {
        question: "Do I need to provide cleaning supplies?",
        answer: "It's not necessary. We bring our own professional cleaning products and equipment. If you have specific preferences (e.g., eco-friendly products), please mention it when requesting a quote."
      },
      {
        question: "How do you calculate the price?",
        answer: "Pricing is based on the size of the space, the type of cleaning requested (standard vs. deep), frequency, and any additional services required. Contact us for a free, personalized quote."
      },
      {
        question: "Are you insured?",
        answer: "Yes, Gallardos Cleaning carries the necessary insurance to protect your property and our team during the service."
      }
    ]
  },
  contact: { // NEW SECTION
    sectionTitle: "Get in Touch",
    sectionSubtitle: "We're ready to help you achieve a spotless space. Send us a message or give us a call!",
    formTitle: "Send Us a Message",
    formNameLabel: "Full Name",
    formEmailLabel: "Email Address",
    formPhoneLabel: "Phone (Optional)",
    formMessageLabel: "Message",
    formSubmitButton: "Send Message",
    formSending: "Sending...", // For future sending state
    contactInfoTitle: "Contact Information",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    socialTitle: "Follow Us"
  },
};