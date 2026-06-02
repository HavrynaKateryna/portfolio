export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* EMERALD GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
      </div>

      {/* IMAGE (controlled composition) */}
      <div className="absolute inset-0 flex justify-end">

        <div className="relative w-full md:w-1/2 h-full">

          <img
            src="/me.jpg"
            alt="Kateryna"
            className="
              w-full h-full object-cover

              /* FIXED MOBILE CROP */
              object-[60%_20%]

              /* DESKTOP */
              md:object-[70%_20%]

              opacity-80
              md:opacity-100

              [mask-image:linear-gradient(to_left,black_60%,transparent_100%)]
            "
          />

          {/* soft overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 container-custom min-h-screen flex items-center">

        <div className="max-w-[720px] space-y-8">

          <p className="text-emerald-400 uppercase tracking-[0.35em] text-xs">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Kateryna<br />
            <span className="text-emerald-400">Havryna</span>
          </h1>

          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Junior Full-Stack Developer focused on React, Next.js and TypeScript.
            I build clean, modern and scalable web applications.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <a
              href="/contact"
              className="btn-primary"
            >
              Contact me
            </a>

            <a
              href="https://github.com/HavrynaKateryna"
              target="_blank"
              className="btn-secondary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kateryna-havryna/"
              target="_blank"
              className="btn-secondary"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}