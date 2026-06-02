import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <div className="py-24">

      <h1 className="text-5xl font-bold mb-10">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            {...p}
          />
        ))}

      </div>

    </div>
  );
}