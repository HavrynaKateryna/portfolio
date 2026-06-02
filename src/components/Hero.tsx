export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* PHOTO BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/me.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* LIGHT OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/60
          via-black/35
          to-black/15
        "
      />

      {/* EMERALD GLOW */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-0
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-emerald-500/20
            blur-[120px]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
        "
      >
        <div className="max-w-2xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-emerald-400
              md:text-sm
            "
          >
            Full-Stack Developer
          </p>

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              leading-none
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            Kateryna
            <br />
            <span className="text-emerald-400">
              Havryna
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-base
              leading-relaxed
              text-white/80
              md:text-lg
            "
          >
            Junior Full-Stack Developer focused on
            building modern web applications with
            React, Next.js and TypeScript.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <a
              href="https://github.com/HavrynaKateryna"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-emerald-500
                px-6
                py-3
                text-center
                font-medium
                text-black
                transition
                hover:bg-emerald-400
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kateryna-havryna/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-white/20
                px-6
                py-3
                text-center
                text-white
                transition
                hover:bg-white/10
              "
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-emerald-500/30
                px-6
                py-3
                text-center
                text-emerald-300
                transition
                hover:bg-emerald-500/10
              "
            >
              Resume
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}