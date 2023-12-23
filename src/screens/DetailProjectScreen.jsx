import React, { useEffect } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { ArrowBack } from "@mui/icons-material";
import { projects } from "../utils/projects";
import "../styles/projectDetail.css";

export async function loader({ params }) {
  const project = projects.find(
    (project) => project.id === parseInt(params.projectId)
  );
  return { project };
}

export default function DetailProjectScreen() {
  const { project } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    const options = {
      // Your options here, for example:
      duration: 0,
      smooth: true,
    };
    animateScroll.scrollToTop(options);
  }, []);
  return (
    <div className="projectDetail">
      <h1>{project.title}</h1>
      {/* <button onClick={() => navigate("/getial/")}>⇦</button> */}
      <ArrowBack className="btn-back" onClick={() => navigate(-1)} />
      <img src={`.${project.image}`} alt="image project" />
      <div className="btns">
        <button>
          <a href={project.codeUrl} target="_blank">
            Ver Codigo {project.type === "Fullstack" && "Frontend"}
          </a>
        </button>
        {project.demoUrl ? (
          <button>
            <a href={project.demoUrl} target="_blank">
              Probar demo
            </a>
          </button>
        ) : (
          <button>
            <a href={project.backUrl} target="_blank">
              Ver codigo Backend
            </a>
          </button>
        )}
      </div>
      <p className="copy">{project.copy}</p>
      <h2>Caracteristicas</h2>
      {project.characteristics.map((item, index) => (
        <div key={index} className="characteristc">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
