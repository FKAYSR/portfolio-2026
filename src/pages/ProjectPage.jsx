import { useParams } from "react-router";
import projects from "../projects";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  return (
    <div>
      <h1>Projekt detalje side</h1>
      {project ? <p>{project.title}</p> : <p>Projektet findes ikke...</p>}
    </div>
  );
}