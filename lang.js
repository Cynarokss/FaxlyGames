const translations = {
  es: {
    "nav-presentacion": "Presentación",
    "nav-juegos": "Juegos",
    "nav-contacto": "Contacto",
    "nav-redes": "Redes Sociales",
    "welcome-title": "Bienvenido",
    "welcome-text": "Explora las diferentes secciones de FaxlyGames.",
    "presentacion-title": "Presentación",
    "presentacion-intro": "Faxly es un equipo de desarrollo de videojuegos pequeño conformado por:",
    "rol-cynarokss": "Programador, compositor, spriter",
    "rol-cj": "Programador",
    "rol-stefan": "Ilustrador",
    "rol-starfiel": "Feedback, apoyo emocional",
    "rol-salvador": "Ilustrador",
    "presentacion-final": "Espero que disfrutes de nuestros juegos ;3.",
    "juegos-title": "Juegos",
    "juegos-text": "Próximamente trailer en nuestras redes de nuestro primer juego en la compañía :D.",
    "contacto-title": "Contacto",
    "contacto-text": "¡Contáctanos!",
    "redes-title": "Redes Sociales",
    "redes-youtube": "YouTube Oficial",
    "redes-instagram": "Instagram Oficial"
  },
  en: {
    "nav-presentacion": "Introduction",
    "nav-juegos": "Games",
    "nav-contacto": "Contact",
    "nav-redes": "Social Media",
    "welcome-title": "Welcome",
    "welcome-text": "Explore the different sections of FaxlyGames.",
    "presentacion-title": "Introduction",
    "presentacion-intro": "Faxly is a small video game development team made up of:",
    "rol-cynarokss": "Programmer, composer, spriter",
    "rol-cj": "Programmer",
    "rol-stefan": "Illustrator",
    "rol-starfiel": "Feedback, emotional support",
    "rol-salvador": "Illustrator",
    "presentacion-final": "We hope you enjoy our games ;3.",
    "juegos-title": "Games",
    "juegos-text": "Coming soon: trailer on our social media of our first company game :D.",
    "contacto-title": "Contact",
    "contacto-text": "Get in touch!",
    "redes-title": "Social Media",
    "redes-youtube": "Official YouTube",
    "redes-instagram": "Official Instagram"
  }
};

function changeLanguage(lang) {
  for (const key in translations[lang]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[lang][key];
    }
  }
  localStorage.setItem("selectedLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  const savedLang = localStorage.getItem("selectedLang") || "es";
  switcher.value = savedLang;
  changeLanguage(savedLang);

  switcher.addEventListener("change", () => {
    changeLanguage(switcher.value);
  });
});
