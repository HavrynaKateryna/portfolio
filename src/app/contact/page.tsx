export default function Contact() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_2fr] gap-14">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Contact
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            If you want to collaborate, hire me, or just say hi — feel free to reach out.
            I usually respond within 24 hours.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">

          {/* EMAIL */}
          <a href="mailto:khavryna@gmail.com" className="card p-5 rounded-2xl block border border-white/10 bg-white/5">
            <p className="text-white/50 text-sm">Email</p>
            <p className="text-white font-medium mt-1">khavryna@gmail.com</p>
          </a>

          {/* PHONE */}
          <a href="tel:+19048700565" className="card p-5 rounded-2xl block border border-white/10 bg-white/5">
            <p className="text-white/50 text-sm">Phone</p>
            <p className="text-white font-medium mt-1">+1 (904) 870-0565</p>
          </a>
 {/* WHATSAPP */}
          <a
            href="https://wa.me/19048700565"
            target="_blank"
            className="card p-5 rounded-2xl block border border-white/10 bg-white/5"
          >
            <p className="text-white/50 text-sm">WhatsApp</p>
            <p className="text-white font-medium mt-1">
              Chat on WhatsApp
            </p>
          </a>
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kateryna-havryna/"
            target="_blank"
            className="card p-5 rounded-2xl block border border-white/10 bg-white/5"
          >
            <p className="text-white/50 text-sm">LinkedIn</p>
            <p className="text-white font-medium mt-1">
              linkedin.com/in/kateryna-havryna
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/HavrynaKateryna"
            target="_blank"
            className="card p-5 rounded-2xl block border border-white/10 bg-white/5"
          >
            <p className="text-white/50 text-sm">GitHub</p>
            <p className="text-white font-medium mt-1">
              github.com/HavrynaKateryna
            </p>
          </a>

         

          {/* LOCATION */}
          <div className="card p-5 rounded-2xl border border-white/10 bg-white/5">
            <p className="text-white/50 text-sm">Location</p>
            <p className="text-white font-medium mt-1">
              Remote / Worldwide
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <a href="mailto:khavryna@gmail.com" className="btn-primary">
              Send Email
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