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
    <section className="py-32">

      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-emerald-400 text-sm uppercase tracking-[0.2em]">
              Certification
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight">
              Frontend Developer
              <span className="text-emerald-400">
                {" "}Certificate
              </span>
            </h1>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Successfully completed professional frontend
              development training focused on modern web
              technologies, responsive design, React
              applications and collaborative Agile workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border border-emerald-500/20
                    bg-emerald-500/5
                    px-4 py-2
                    text-sm
                    text-emerald-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-4">

              <a
                href="/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-emerald-500
                  px-6 py-3
                  font-medium
                  text-black
                  transition
                  hover:bg-emerald-400
                "
              >
                View PDF
              </a>

              <a
                href="/certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border border-white/10
                  px-6 py-3
                  text-white
                  transition
                  hover:bg-white/5
                "
              >
                Open Image
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <a
              href="/certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition
                  group-hover:border-emerald-500/30
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
                    object-contain
                    transition
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />

              </div>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}