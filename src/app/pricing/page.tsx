export default function Pricing() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_2fr] gap-14">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Pricing
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Transparent pricing for modern web development. Flexible depending on project complexity.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">

          {/* LANDING */}
          <div className="card rounded-2xl p-6 space-y-5">

            <h2 className="text-lg font-semibold">Landing Page</h2>
            <p className="text-3xl font-bold">$200–$300</p>

            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Responsive design</li>
              <li>✓ Contact form</li>
              <li>✓ Basic animations</li>
              <li>✓ SEO structure</li>
              <li>✓ Deployment (Vercel / Netlify)</li>
            </ul>

            <a href="/contact" className="btn-secondary w-full text-center">
              Request this package
            </a>

          </div>

          {/* MULTI PAGE (POPULAR) */}
          <div className="card rounded-2xl p-6 space-y-5 bg-white/10 border border-emerald-500/30">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Multi-page Website</h2>

              <span className="text-xs bg-emerald-500 text-black px-3 py-1 rounded-full">
                Popular
              </span>
            </div>

            <p className="text-3xl font-bold text-emerald-400">
              $450–$700
            </p>

            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ 3–6 pages</li>
              <li>✓ Forms integration</li>
              <li>✓ SEO optimization</li>
              <li>✓ Scalable structure</li>
              <li>✓ Modern UI/UX design</li>
            </ul>

            <a href="/contact" className="btn-primary w-full text-center">
              Choose this package
            </a>

          </div>

          {/* FULL STACK */}
          <div className="card rounded-2xl p-6 space-y-5">

            <h2 className="text-lg font-semibold">Full-stack App</h2>
            <p className="text-3xl font-bold">$900–$1200</p>

            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Frontend (React, Next.js)</li>
<li>✓ Backend (Node.js, Express)</li>
<li>✓ Database (MongoDB)</li>
              <li>✓ Database integration</li>
              <li>✓ Authentication system</li>
              <li>✓ API development</li>
            </ul>

            <a href="/contact" className="btn-secondary w-full text-center">
              Discuss project
            </a>

          </div>

          {/* ADD-ONS */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="card p-6 rounded-2xl space-y-2">
              <h3 className="font-semibold">Additional Page</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>✓ Extra pages for your website</li>
              </ul>
              <p className="text-xl font-bold mt-2">$40–$60 / page</p>

              <a href="/contact" className="text-emerald-400 text-sm mt-3 inline-block">
                Add to project →
              </a>
            </div>

            <div className="card p-6 rounded-2xl space-y-2">
              <h3 className="font-semibold">Website Optimization</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>✓ Speed optimization</li>
                <li>✓ SEO improvements</li>
                <li>✓ Performance tuning</li>
              </ul>
              <p className="text-xl font-bold mt-2">$120–$180</p>

              <a href="/contact" className="text-emerald-400 text-sm mt-3 inline-block">
                Optimize my site →
              </a>
            </div>

          </div>

          {/* MAINTENANCE */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="card p-6 rounded-2xl space-y-2">
              <h3 className="font-semibold">Basic Maintenance</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>✓ Bug fixes</li>
                <li>✓ Content updates</li>
                <li>✓ Minor changes</li>
              </ul>

              <p className="text-xl font-bold mt-2">$50 / month</p>

              <a href="/contact" className="text-emerald-400 text-sm mt-3 inline-block">
                Start maintenance →
              </a>
            </div>

            <div className="card p-6 rounded-2xl space-y-2">
              <h3 className="font-semibold">Pro Maintenance</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>✓ Priority support</li>
                <li>✓ Updates & improvements</li>
                <li>✓ Security monitoring</li>
              </ul>

              <p className="text-xl font-bold mt-2">$100 / month</p>

              <a href="/contact" className="text-emerald-400 text-sm mt-3 inline-block">
                Get support →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}