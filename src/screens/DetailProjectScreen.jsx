import React from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { projects } from "../utils/projects";
import "../styles/projectDetail.css";
import ArrowBack from "@material-ui/icons/ArrowBack";

export async function loader({ params }) {
  const project = projects.find(
    (project) => project.id === parseInt(params.projectId)
  );
  return { project };
}

export default function DetailProjectScreen() {
  const { project } = useLoaderData();
  const navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };
  return (
    <div className="projectDetail">
      <h1>{project.title}</h1>
      {/* <button onClick={() => navigate("/getial/")}> */}
      <ArrowBack className="btn-back" onClick={goBack} />
      {/* </button> */}
      <img src="../assets/1.jpeg" alt="" />
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
