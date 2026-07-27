import { Link } from "react-router";

function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.slug}`} className="project-card">
            <img src={project.thumbnail} alt={project.title} className="project-card-image"/>

            <div className="project-card-content">
                <h3 className="project-class-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
            </div>
        </Link>
    );
}

export default ProjectCard;