import Image from "next/image";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "REST API",
  "Git",
  "GitHub",
  "Agile",
  "Scrum",
];

export default function CertificatePage() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <p className="text-emerald-400 text-xs uppercase tracking-[0.3em]">
            Certification
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Frontend Developer{" "}
            <span className="text-emerald-400">
              Certificate
            </span>
          </h1>

          <p className="text-white/60 leading-relaxed text-base md:text-lg max-w-xl">
            Successfully completed professional frontend development training focused on
            modern web technologies, responsive design, React applications and Agile workflows.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  text-xs md:text-sm
                  px-3 py-1.5
                  rounded-full

                  border border-white/10
                  bg-white/5

                  text-white/70
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">

            <a
              href="/certificate.pdf"
              target="_blank"
              className="btn-primary"
            >
              View PDF
            </a>

            <a
              href="/certificate.jpg"
              target="_blank"
              className="btn-secondary"
            >
              Open Image
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          <a
            href="/certificate.jpg"
            target="_blank"
            className="block group"
          >

            <div
              className="
                relative

                overflow-hidden
                rounded-3xl

                border border-white/10
                bg-white/5

                backdrop-blur-xl

                transition-all duration-300

                group-hover:-translate-y-1
                group-hover:border-emerald-500/30
                group-hover:shadow-lg
                group-hover:shadow-emerald-500/10
              "
            >

              <Image
                src="/certificate.jpg"
                alt="Frontend Developer Certificate"
                width={1200}
                height={900}
                priority
                className="
                  w-full
                  h-auto
                  object-cover

                  transition duration-500
                  group-hover:scale-[1.03]
                "
              />

              {/* subtle glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>

          </a>

        </div>

      </div>

    </section>
  );
}