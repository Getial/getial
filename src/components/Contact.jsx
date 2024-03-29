import React, { useRef, useEffect, useState } from "react";
import { Element } from "react-scroll";
import "../styles/contact.css";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";

export default function Contact({ onInView }) {
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);
  const [texts, setTexts] = useState(getTexts);
  const contactRef = useRef(null);
  const { lang } = useLang();

  // usseEffect para traer los textos dependiendo del idoma
  useEffect(() => {
    const texts = getTexts(lang);
    setTexts(texts);
  }, [lang]);

  //useEffect para animar aleatoriamente un icono
  useEffect(() => {
    // Función para aplicar la animación a un icono aleatorio
    const aplicarAnimacionAleatoria = () => {
      const iconos = document.querySelectorAll(".icono");
      const iconoAleatorio = iconos[Math.floor(Math.random() * iconos.length)];

      // Quitar la clase de animación de todos los iconos
      iconos.forEach((icono) => {
        icono.classList.remove("animacion-bounce");
      });

      // Agregar la clase de animación al icono aleatorio
      iconoAleatorio.classList.add("animacion-bounce");
    };

    // Aplicar la animación cada 3 segundos (ajusta según tus preferencias)
    const intervalo = setInterval(aplicarAnimacionAleatoria, 2000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  // useEffect para leer el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      if (contactRef.current) {
        const rect =
          contactRef.current.childBindings.domNode.getBoundingClientRect();
        const isInView = rect.top < 300 && rect.bottom >= 300;
        onInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Element name="Contacto" className="contact-container" ref={contactRef}>
      <div className="contact">
        <h3 className="title">{texts.contact.title}</h3>
        <p className="cta">
          {texts.contact.cta[0]}
          <a
            href="http://www.linkedin.com/in/brayan-felipe-getial-5768b1213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          {texts.contact.cta[1]}
          <a
            href="https://github.com/Getial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {texts.contact.cta[2]}
          <a
            href="mailto:bfgetial@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts.contact.cta[3]}
          </a>
          {texts.contact.cta[4]}
        </p>
        <div className="logos">
          <a
            className={`icono ${
              iconoSeleccionado === 1 ? "animacion-bounce" : ""
            }`}
            target="_blank"
            href="https://www.linkedin.com/in/brayan-felipe-getial-5768b1213/"
          >
            <img src="./assets/logos/linkedin.png" alt="logo linkedin" />
          </a>
          <a
            className={`icono ${
              iconoSeleccionado === 2 ? "animacion-bounce" : ""
            }`}
            target="_blank"
            href="https://github.com/Getial"
          >
            <img src="./assets/logos/github.png" alt="logo github" />
          </a>
          <a
            className={`icono ${
              iconoSeleccionado === 3 ? "animacion-bounce" : ""
            }`}
            target="_blank"
            href="mailto:bfgetial@gmail.com"
          >
            <img src="./assets/logos/mail.png" alt="logo mail" />
          </a>
        </div>
        <div className="info">
          <h4>{texts.contact.info.title}</h4>
          <div>
            <p>{texts.contact.info.labelName}</p>
            <p>{texts.contact.info.name}</p>
          </div>
          <div>
            <p>{texts.contact.info.labelAge}</p>
            <p>{texts.contact.info.age}</p>
          </div>
          <div>
            <p>{texts.contact.info.labelResideIn}</p>
            <p>{texts.contact.info.resideIn}</p>
          </div>
        </div>
      </div>
    </Element>
  );
}
