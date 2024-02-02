import React, { useState, useRef, useEffect } from "react";
import "../styles/habilitys.css";
import { Element } from "react-scroll";
import CardCarrousel from "./CardCarrousel";
import { useLang } from "../context/LangContext";

export default function Habilitys({ onInView }) {
  const habilitysRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { lang } = useLang();

  const title =
    lang === "es" ? "Habilidades y Conocimientos" : "Skills and Knowledge";

  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      const rect =
        habilitysRef.current.childBindings.domNode.getBoundingClientRect();
      const isInViewActive = rect.top < 300 && rect.bottom >= 300;
      setIsInView(isInViewActive);
      onInView(isInViewActive);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Element name="Habilidades" className="habilitys" ref={habilitysRef}>
      {/* <section> */}
      <h3 className="title">{title}</h3>
      <CardCarrousel isInView={isInView} />
      {/* </section> */}
    </Element>
  );
}
