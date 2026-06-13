import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact() {

  const flyerPath = "/Kateryna-Havryna-Flyer.pdf";

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

          {/* FLYER BLOCK (ADDED) */}
          <div className="space-y-3 pt-4">

            

            <div className="flex flex-col sm:flex-row gap-3">

              <a
                href={flyerPath}
                target="_blank"
                className="btn-secondary flex-1 text-center"
              >
                View flyer
              </a>

              <a
                href={flyerPath}
                download="Kateryna-Havryna-Flyer.pdf"
                className="btn-primary flex-1 text-center"
              >
                Download flyer
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">

          {/* EMAIL */}
          <a href="mailto:khavryna@gmail.com" className="card p-5 rounded-2xl flex items-start gap-3 border border-white/10 bg-white/5">
            <FiMail className="text-emerald-400 mt-1" />
            <div>
              <p className="text-white/50 text-sm">Email</p>
              <p className="text-white font-medium mt-1">khavryna@gmail.com</p>
            </div>
          </a>

          {/* PHONE */}
          <a href="tel:+19048700565" className="card p-5 rounded-2xl flex items-start gap-3 border border-white/10 bg-white/5">
            <FiPhone className="text-emerald-400 mt-1" />
            <div>
              <p className="text-white/50 text-sm">Phone</p>
              <p className="text-white font-medium mt-1">+1 (904) 870-0565</p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/19048700565"
            target="_blank"
            className="card p-5 rounded-2xl flex items-start gap-3 border border-white/10 bg-white/5"
          >
            <FiMessageCircle className="text-emerald-400 mt-1" />
            <div>
              <p className="text-white/50 text-sm">WhatsApp</p>
              <p className="text-white font-medium mt-1">Chat on WhatsApp</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kateryna-havryna/"
            target="_blank"
            className="card p-5 rounded-2xl flex items-start gap-3 border border-white/10 bg-white/5"
          >
            <FiLinkedin className="text-emerald-400 mt-1" />
            <div>
              <p className="text-white/50 text-sm">LinkedIn</p>
              <p className="text-white font-medium mt-1">
                linkedin.com/in/kateryna-havryna
              </p>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/HavrynaKateryna"
            target="_blank"
            className="card p-5 rounded-2xl flex items-start gap-3 border border-white/10 bg-white/5"
          >
            <FiGithub className="text-emerald-400 mt-1" />
            <div>
              <p className="text-white/50 text-sm">GitHub</p>
              <p className="text-white font-medium mt-1">
                github.com/HavrynaKateryna
              </p>
            </div>
          </a>

          {/* LOCATION */}
          <div className="card p-5 rounded-2xl flex items-start gap-3 border border-white/10 bg-white/5">
            <FiMapPin className="text-emerald-400 mt-1" />
            <div>
              <p className="text-white/50 text-sm">Location</p>
              <p className="text-white font-medium mt-1">
                Remote / Worldwide
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}