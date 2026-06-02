export default function Pricing() {
  return (
    <section className="py-24">

      <h1 className="text-5xl font-bold mb-10">
        Pricing
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* basic */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition">
          <h2 className="text-xl font-bold">Basic</h2>
          <p className="text-gray-400 mt-2">Landing page</p>
          <p className="text-3xl font-bold mt-6">$100</p>

          
        </div>

        {/* pro */}
        <div className="p-6 rounded-xl bg-white/10 border border-white/30 scale-105">
          <h2 className="text-xl font-bold">Pro</h2>
          <p className="text-gray-400 mt-2">Portfolio / SaaS UI</p>
          <p className="text-3xl font-bold mt-6">$300</p>

         
        </div>

        {/* enterprise */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <p className="text-gray-400 mt-2">Full product</p>
          <p className="text-3xl font-bold mt-6">$1000+</p>

         
        </div>

      </div>

    </section>
  );
}