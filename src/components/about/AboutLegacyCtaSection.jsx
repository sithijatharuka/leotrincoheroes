function AboutLegacyCtaSection() {
  return (
    <section className="mt-20">
      <div className="bg-[#e8e7eb] py-16">
        <div className="mx-auto grid w-full max-w-[1220px] gap-8 px-5 lg:grid-cols-[1fr_1.18fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-black/5 shadow-[0_16px_30px_rgba(18,18,24,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
              alt="Senior leader portrait"
              className="h-full min-h-[310px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#ba4a24]">LEGACY</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.1rem)] font-bold text-[#13151b]">Our Parent Club</h2>
            <p className="mt-4 max-w-[620px] text-base leading-relaxed text-[#666974]">
              The Leo Club of Trincomalee Heroes is proudly sponsored and guided by the esteemed Lions
              Club of Trincomalee Town. Their unwavering support and mentorship provide us with the
              structural foundation and wisdom required to execute large-scale initiatives.
            </p>
            <p className="mt-4 max-w-[620px] text-base leading-relaxed text-[#666974]">
              Through this partnership, we bridge the gap between generations of service, ensuring that
              our innovative youthful energy is paired with the professional experience of seasoned
              community leaders.
            </p>

            <button className="mt-6 text-sm font-semibold text-[#ba3f16] transition-colors hover:text-[#86290e]">
              Learn about Lions International →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ececf0] py-16">
        <div className="mx-auto w-full max-w-[920px] px-5 text-center lg:px-8">
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-bold text-[#14161b]">Ready to become a hero?</h2>
          <p className="mx-auto mt-4 max-w-[630px] text-base leading-relaxed text-[#666974]">
            We are always looking for passionate individuals to join our cause and make a difference in
            Trincomalee.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-[#9e2d08] to-[#cf4b1e] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(156,46,12,0.35)] transition-transform hover:-translate-y-0.5">
              Join Our Club
            </button>
            <button className="rounded-full border border-black/10 bg-[#e1e1e6] px-8 py-3 text-sm font-semibold text-[#30333c] transition-colors hover:bg-[#d8d8de]">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLegacyCtaSection
