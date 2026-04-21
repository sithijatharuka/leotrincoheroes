function AboutIdentitySection() {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1220px] px-5 lg:px-8">
      <p className="text-[10px] font-semibold tracking-[0.28em] text-[#ba4a24]">IDENTITY</p>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-center">
        <div>
          <h2 className="text-[clamp(2rem,4.2vw,3.35rem)] font-bold leading-tight text-[#14161b]">
            Who We Are
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-[#666974]">
            Founded in the vibrant coastal city of Trincomalee, the Leo Club of Trincomalee Heroes is a
            collective of young leaders dedicated to creating sustainable social change. We are more than
            just a volunteer group; we are a family of changemakers driven by the spirit of selfless
            service.
          </p>

          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-[#666974]">
            Our club brings together diverse talents from students to young professionals all united by a
            common goal: to uplift our community through innovative projects, disaster relief efforts, and
            educational empowerment.
          </p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-[0_18px_40px_rgba(17,17,22,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Team members joining hands in unity"
            className="h-full min-h-[350px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutIdentitySection
