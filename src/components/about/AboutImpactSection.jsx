import { aboutApproachCards, aboutStats } from '../../content/siteContent'

function AboutImpactSection() {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1220px] space-y-20 px-5 lg:px-8">
      <div>
        <p className="text-[10px] font-semibold tracking-[0.28em] text-[#ba4a24]">OUR IMPACT</p>
        <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.25rem)] font-bold text-[#14161b]">Numbers That Speak</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {aboutStats.map((stat) => (
            <article
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#efeff2] p-6 shadow-[0_12px_32px_rgba(20,20,24,0.04)]"
            >
              <p className="text-sm text-[#bf3f12]">{stat.icon}</p>
              <p className="mt-3 text-[1.85rem] font-bold text-[#171920]">{stat.label}</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#7f8490]">
                {stat.description}
              </p>
              <p className="pointer-events-none absolute right-4 top-1 text-[58px] font-semibold leading-none text-[#dddddf]">
                {stat.ghost}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-[0.28em] text-[#ba4a24]">PURPOSE</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-center">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-bold text-[#14161b]">Our Approach</h2>
            <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[#666974]">
              We believe in a collaborative, community-first approach. By identifying the root causes of
              local challenges, we design projects that offer long-term solutions rather than temporary
              fixes.
            </p>

            <div className="mt-8 space-y-4">
              {aboutApproachCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-black/5 bg-[#efeff2] p-5 shadow-[0_10px_28px_rgba(25,25,29,0.04)]"
                >
                  <h3 className="text-lg font-semibold text-[#1c1f27]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#666974]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="overflow-hidden rounded-full border-[8px] border-[#e3e3e8] shadow-[0_24px_45px_rgba(20,20,24,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1100&q=80"
                alt="Hands joining together in a circle"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute right-1 top-10 rounded-full bg-gradient-to-r from-[#9e2d08] to-[#cf4b1e] px-4 py-3 text-xs font-semibold text-white shadow-[0_14px_24px_rgba(157,46,10,0.35)]">
              Youth Driver
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutImpactSection
