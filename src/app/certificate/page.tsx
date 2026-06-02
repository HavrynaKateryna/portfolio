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

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-14 items-center">

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

          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">

            <a href="/certificate.pdf" target="_blank" className="btn-primary">
              View PDF
            </a>

            <a href="/certificate.jpg" target="_blank" className="btn-secondary">
              Open Image
            </a>

          </div>

        </div>

        {/* RIGHT SIDE (КАРТИНКА МЕНЬШЕ И БАЛАНС ЛУЧШЕ) */}
        <div className="flex justify-center">

          <div className="card rounded-3xl border border-white/10 bg-white/5 overflow-hidden max-w-[520px] w-full">

            <Image
              src="/certificate.jpg"
              alt="Frontend Developer Certificate"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}