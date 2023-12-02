import React, { useState, useRef, useEffect } from "react";
import "../styles/habilitys.css";
import { Element } from "react-scroll";
import CardCarrousel from "./CardCarrousel";

export default function Habilitys({ onInView }) {
  const habilitysRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Acciones cuando el componente está en pantalla
  //     const rect = habilitysRef.current.getBoundingClientRect();
  //     const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
  //     onInView(isInView);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <Element name="Habilidades" className="habilitys" ref={habilitysRef}>
      {/* <section> */}
      <h3 className="title">Habilidades y Conocimientos</h3>
      <CardCarrousel />
      {/* </section> */}
    </Element>
  );
}
