import React from "react";
import ProjectComponent from "./ProjectComponent";
import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Admos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, eius cum impedit autem aliquid recusandae sequi mollitia sunt aspernatur soluta! Voluptatem adipisci aspernatur possimus deserunt voluptates cum fuga cupiditate praesentium.",
      image: "src/assets/1.jpeg",
    },
    {
      title: "React Shop",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, eius cum impedit autem aliquid recusandae sequi mollitia sunt aspernatur soluta! Voluptatem adipisci aspernatur possimus deserunt voluptates cum fuga cupiditate praesentium.",
      image: "src/assets/2.jpeg",
    },
    {
      title: "Music Player",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, eius cum impedit autem aliquid recusandae sequi mollitia sunt aspernatur soluta! Voluptatem adipisci aspernatur possimus deserunt voluptates cum fuga cupiditate praesentium.",
      image: "src/assets/1.jpeg",
    },
  ];
  return (
    <section className="projects">
      {projects.map((project) => (
        <ProjectComponent
          title={project.title}
          description={project.description}
          imageUrl={project.image}
        />
      ))}
    </section>
  );
}
