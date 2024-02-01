import React, { useRef, useState, useEffect } from "react";
import ProjectComponent from "./ProjectComponent";
import "../styles/projects.css";
// import { projects } from "../utils/projects";
import { Element } from "react-scroll";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";

export default function Projects({ onInView }) {
  const [projects, setProjects] = useState([]);
  const [texts, setTexts] = useState(null);
  const projectsRef = useRef(null);
  const { lang } = useLang();

  // usseEffect para traer los textos dependiendo del idioma
  useEffect(() => {
    const texts = getTexts(lang);
    setProjects(texts.projects);
    setTexts(texts.projectsComponent);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      const rect =
        projectsRef.current.childBindings.domNode.getBoundingClientRect();
      const isInView = rect.top < 300 && rect.bottom >= 300;
      onInView(isInView);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Element
      name="Proyectos"
      className="projects"
      href="projectsRef"
      ref={projectsRef}
    >
      <h3 className="title">{texts?.title}</h3>
      {projects.map((project, index) => (
        <ProjectComponent
          key={index}
          project={project}
          left={index % 2 ? true : false}
        />
      ))}
    </Element>
  );
}
