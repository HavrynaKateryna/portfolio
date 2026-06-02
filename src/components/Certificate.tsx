export default function Certificate() {
  return (
    <section className="py-24">

      <div className="max-w-4xl">

        <p className="text-emerald-400 text-sm mb-3">
          CERTIFICATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Frontend Development
          <span className="text-emerald-400"> Certificate</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Successfully completed professional training focused on
          modern frontend development, team collaboration and
          production-ready web applications.
        </p>

      </div>

      <div
        className="
          mt-10
          rounded-3xl
          border border-emerald-500/10
          bg-white/5
          backdrop-blur-xl
          p-8
          hover:border-emerald-500/30
          transition
        "
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="text-2xl font-semibold">
              GOIT Frontend Developer
            </h3>

            <p className="text-gray-400 mt-2">
              2025
            </p>

            <ul className="mt-6 space-y-2 text-gray-300">
              <li>✓ HTML5 & CSS3</li>
              <li>✓ JavaScript (ES6+)</li>
              <li>✓ React.js</li>
              <li>✓ Next.js Fundamentals</li>
              <li>✓ REST API Integration</li>
              <li>✓ Git & GitHub Workflow</li>
              <li>✓ Agile / Scrum Team Collaboration</li>
            </ul>
          </div>

          <div className="flex items-center">
            <a
              href="/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                rounded-full
                bg-emerald-500
                text-black
                font-medium
                hover:bg-emerald-400
                transition
              "
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}