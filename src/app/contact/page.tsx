export default function Contact() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="max-w-[720px] space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Contact
        </h1>

        <p className="text-white/60 text-base md:text-lg leading-relaxed">
          If you want to collaborate, hire me, or just say hi — feel free to reach out.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid gap-4">

          {/* EMAIL */}
          <a
            href="mailto:example@gmail.com"
            className="card p-5 rounded-2xl block"
          >
            <p className="text-white/50 text-sm">Email</p>
            <p className="text-white font-medium mt-1">
              example@gmail.com
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/yourname"
            target="_blank"
            className="card p-5 rounded-2xl block"
          >
            <p className="text-white/50 text-sm">GitHub</p>
            <p className="text-white font-medium mt-1">
              github.com/yourname
            </p>
          </a>

          {/* LOCATION */}
          <div className="card p-5 rounded-2xl">
            <p className="text-white/50 text-sm">Location</p>
            <p className="text-white font-medium mt-1">
              Remote / Worldwide
            </p>
          </div>

        </div>

        {/* CTA BLOCK */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4">

          <a
            href="mailto:example@gmail.com"
            className="btn-primary"
          >
            Send Email
          </a>

          <a
            href="https://github.com/HavrynaKateryna"
            target="_blank"
            className="btn-secondary"
          >
            View GitHub
          </a>

        </div>

      </div>

    </section>
  );
}