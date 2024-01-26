import texts from "./texts.json";

export const getTexts = (lang) => {
  return texts[lang] || texts["en"]; // Si el idioma no está disponible, utiliza inglés como predeterminado
};
