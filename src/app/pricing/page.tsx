export default function Pricing() {
  return (
    <section className="container-custom py-24 md:py-32">

      <div className="max-w-[900px] space-y-16">

        {/* HEADER */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Pricing
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-xl">
            Simple pricing for freelance work. Flexible depending on project complexity.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* BASIC */}
          <div className="card rounded-2xl p-6 space-y-6">

            <div>
              <h2 className="text-lg font-semibold">Basic</h2>
              <p className="text-white/50 text-sm mt-1">
                Landing page
              </p>
            </div>

            <p className="text-3xl font-bold">$100</p>

            <ul className="text-white/60 text-sm space-y-2">
              <li>✓ Responsive design</li>
              <li>✓ Basic animations</li>
              <li>✓ 1 page</li>
            </ul>

            <a href="/contact" className="btn-secondary w-full text-center">
              Choose plan
            </a>
          </div>

          {/* PRO (highlighted) */}
          <div className="card rounded-2xl p-6 space-y-6 border-emerald-500/30 bg-white/10 relative">

            {/* badge */}
            <span className="absolute -top-3 left-6 text-xs bg-emerald-500 text-black px-3 py-1 rounded-full">
              Popular
            </span>

            <div>
              <h2 className="text-lg font-semibold">Pro</h2>
              <p className="text-white/50 text-sm mt-1">
                Portfolio / SaaS UI
              </p>
            </div>

            <p className="text-3xl font-bold text-emerald-400">$300</p>

            <ul className="text-white/60 text-sm space-y-2">
              <li>✓ Everything in Basic</li>
              <li>✓ Advanced animations</li>
              <li>✓ Multi-page app</li>
              <li>✓ API integration</li>
            </ul>

            <a href="/contact" className="btn-primary w-full text-center">
              Choose plan
            </a>
          </div>

          {/* ENTERPRISE */}
          <div className="card rounded-2xl p-6 space-y-6">

            <div>
              <h2 className="text-lg font-semibold">Enterprise</h2>
              <p className="text-white/50 text-sm mt-1">
                Full product
              </p>
            </div>

            <p className="text-3xl font-bold">$1000+</p>

            <ul className="text-white/60 text-sm space-y-2">
              <li>✓ Full system design</li>
              <li>✓ Backend integration</li>
              <li>✓ Authentication</li>
              <li>✓ Scaling architecture</li>
            </ul>

            <a href="/contact" className="btn-secondary w-full text-center">
              Contact me
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}