import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section className="container-custom py-24 md:py-32">

      {/* HEADER */}
      <div className="max-w-[720px] space-y-4 mb-16">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="text-white/60 text-lg leading-relaxed">
          A collection of my recent work in frontend and full-stack development.
        </p>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            {...p}
          />
        ))}

      </div>

    </section>
  );
}