import React from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
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
  let goBack = () => {
    navigate(-1);
  };
  return (
    <div className="projectDetail">
      <h1>{project.title}</h1>
      {/* <button onClick={() => navigate("/getial/")}>⇦</button> */}
      <ArrowBack className="btn-back" onClick={() => navigate("/getial/")} />
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
