export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* EMERALD GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
      </div>

      {/* IMAGE */}
      <div className="absolute inset-0 flex justify-end">

        <div className="relative w-full md:w-1/2 h-full">

          <img
            src="/me.jpg"
            alt="Kateryna"
            className="
              w-full h-full object-cover
              object-[60%_20%]
              md:object-[70%_20%]
              translate-y-6 md:translate-y-10
              opacity-95 md:opacity-100
              md:[mask-image:linear-gradient(to_left,black_70%,transparent_100%)]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent md:from-black/70 md:via-black/40" />

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 container-custom min-h-screen flex items-center">

        {/* MOBILE DARK SAFE ZONE */}
        <div className="absolute inset-0 md:hidden bg-black/40" />

        <div className="relative max-w-[720px] space-y-8">

          <p className="text-emerald-400 uppercase tracking-[0.35em] text-xs">
            Full-Stack Developer
          </p>

          <h1 className="
            text-5xl md:text-7xl font-bold leading-tight
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
          ">
            Kateryna<br />
            <span className="text-emerald-400">Havryna</span>
          </h1>

          <p className="
            text-white/90 md:text-white/60
            text-lg max-w-[520px] leading-relaxed
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
          ">
            I’m a Junior Full-Stack Developer specializing in building modern web applications using React, Next.js, and Node.js.
            I create fast, responsive and scalable digital products with APIs, backend logic, and databases — from landing pages to full-stack platforms.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <a href="/contact" className="btn-primary">
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