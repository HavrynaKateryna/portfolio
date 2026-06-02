export default function About() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.2fr_1fr] gap-14">

        {/* LEFT SIDE (ТЕКСТ ШИРЕ) */}
        <div className="space-y-8">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            About me
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            I’m a Junior Full-Stack Developer focused on building modern, scalable, and user-centered web applications.
            I work with React, Next.js, and TypeScript on the frontend, and Node.js, Express, and MongoDB on the backend.

            I focus on creating clean interfaces, implementing secure authentication systems, and designing efficient REST APIs with smooth client-server interaction.

            I enjoy turning ideas into real products — from landing pages to full-stack applications — with attention to performance, usability, and design quality.

            Currently open to freelance opportunities and junior full-stack developer roles.
          </p>

        </div>

        {/* RIGHT SIDE (КАРТОЧКИ УЖЕ) */}
        <div className="space-y-6 md:sticky md:top-24">

          <div className="card p-5 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-white font-semibold mb-3">Frontend</h3>

            <p className="text-white/60 text-sm leading-relaxed">
              ✔ React, Next.js, TypeScript<br />
              ✔ TanStack React Query, Zustand, Axios<br />
              ✔ Formik, Yup<br />
              ✔ Tailwind CSS, react-select, react-datepicker, react-hot-toast, react-spinners<br />
              ✔ CSS Modules, modern-normalize<br />
              ✔ ESLint
            </p>
          </div>

          <div className="card p-5 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-white font-semibold mb-3">Backend</h3>

            <p className="text-white/60 text-sm leading-relaxed">
              ✔ Node.js, Express, MongoDB<br />
              ✔ REST API development<br />
              ✔ Authentication systems (JWT, protected routes)<br />
              ✔ Client-server architecture<br />
              ✔ Data modeling & integration
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}