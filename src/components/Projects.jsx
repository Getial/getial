import React, { useRef, useState, useEffect } from "react";
import ProjectComponent from "./ProjectComponent";
import "../styles/projects.css";
import { projects } from "../utils/projects";
import { Element } from "react-scroll";

export default function Projects({ onInView }) {
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      const rect =
        projectsRef.current.childBindings.domNode.getBoundingClientRect();
      // console.log(
      //   "rect.top projects ===>> ",
      //   rect.top < 300 && rect.bottom >= 300
      // );
      // console.log(rect.bottom);

      // console.log("bottom", rect.bottom);
      // console.log("top", rect.top);

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
      <h3 className="title">Proyectos</h3>
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
