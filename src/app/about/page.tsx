export default function About() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="max-w-[720px] space-y-10">

        {/* TITLE */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold
            tracking-tight
            text-white
          "
        >
          About me
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-base md:text-lg
            leading-relaxed
            text-white/60
          "
        >
          Junior Full-Stack Developer with experience in React, Next.js and TypeScript.
          Focused on building clean, scalable and user-friendly web applications.
        </p>

        {/* HIGHLIGHTS */}
        <div className="grid gap-4 sm:grid-cols-2 pt-6">

          <div className="card p-5 rounded-2xl">
            <h3 className="text-white font-semibold mb-2">
              Frontend
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              React, Next.js, TypeScript, Tailwind CSS, Zustand
            </p>
          </div>

          <div className="card p-5 rounded-2xl">
            <h3 className="text-white font-semibold mb-2">
              Backend
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Node.js, REST API, basic authentication flows
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}