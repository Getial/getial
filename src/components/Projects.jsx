import React from "react";
import ProjectComponent from "./ProjectComponent";
import "../styles/projects.css";
import { projects } from "../utils/projects";

export default function Projects() {
  return (
    <section className="projects">
      <h3 className="title">Proyectos</h3>
      {projects.map((project, index) => (
        <ProjectComponent
          key={index}
          project={project}
          left={index % 2 ? true : false}
        />
      ))}
    </section>
  );
}
