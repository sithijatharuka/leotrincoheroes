function HeroSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
      <div>
        <span className="inline-flex rounded-full bg-[#f3d8cf] px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] text-[#8f3d20]">
          EMPOWERING YOUTH
        </span>

        <h1 className="mt-7 text-[clamp(2.5rem,5.8vw,5.2rem)] font-bold leading-[0.95] text-[#121317]">
          Together We
          <br />
          <span className="text-[#bf3f12]">Lead.</span>
          <br />
          Together We
          <br />
          <span className="text-[#bf3f12]">Serve.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5e6069]">
          Join the Leo Club of Trincomalee Heroes. We are a community of young leaders dedicated to
          creating sustainable humanitarian impact in our coastal home.
        </p>

        <button className="mt-9 rounded-full bg-gradient-to-r from-[#9d300d] to-[#ca481d] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(157,46,10,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(157,46,10,0.4)]">
          Join Our Mission
        </button>
      </div>

      <div className="group relative overflow-hidden rounded-[30px] border border-black/5 shadow-[0_30px_60px_rgba(24,24,30,0.12)]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1300&q=80"
          alt="Young volunteers standing together"
          className="h-[460px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  )
}

export default HeroSection
