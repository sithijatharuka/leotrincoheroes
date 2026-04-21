import { homeStats } from '../content/siteContent'

function StatsSection() {
  return (
    <section className="mt-14 rounded-[32px] bg-[#e9e8ec] px-4 py-12 md:px-8 md:py-14">
      <h2 className="text-center text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#14161b]">
        Our Numbers That Speak
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {homeStats.map((stat) => (
          <article key={stat.label} className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#f1f1f5] p-6">
            <p className="text-center text-[clamp(2.1rem,4.5vw,3.2rem)] font-bold text-[#bf3f12]">{stat.value}</p>
            <p className="mt-1 text-center text-[10px] font-semibold tracking-[0.22em] text-[#2b2d33]">{stat.label}</p>
            <p className="mx-auto mt-3 max-w-[220px] text-center text-sm leading-relaxed text-[#5b5d65]">
              {stat.description}
            </p>

            <p className="pointer-events-none absolute right-3 top-0 text-[84px] font-semibold leading-none text-[#cfcfd5]/60">
              {stat.ghost}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
