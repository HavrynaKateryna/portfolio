"use client";

type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  stack,
  github,
  live,
}: Project) {
  return (
    <div
      className="
        group
        rounded-2xl
        overflow-hidden

        border border-white/10
        bg-white/5

        backdrop-blur-xl

        transition-all duration-300

        hover:-translate-y-2
        hover:border-emerald-500/30
        hover:bg-white/[0.07]

        shadow-sm hover:shadow-emerald-500/10
      "
    >

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover

            transition duration-700
            group-hover:scale-110
          "
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="
                text-xs
                px-2 py-1
                rounded-full

                border border-white/10
                bg-white/5

                text-white/70
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-5 pt-2">

          {github && (
            <a
              href={github}
              target="_blank"
              className="
                text-sm text-white/60
                hover:text-emerald-400
                transition
              "
            >
              GitHub →
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              className="
                text-sm text-white/60
                hover:text-white
                transition
              "
            >
              Live →
            </a>
          )}

        </div>

      </div>
    </div>
  );
}