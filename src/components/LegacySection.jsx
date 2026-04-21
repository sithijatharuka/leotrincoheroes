import { homeHighlights } from '../content/siteContent'

function LegacySection() {
  return (
    <section className="mt-14 rounded-[30px] bg-[#ece9ed] p-4 md:p-7">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1100&q=80"
            alt="Community aid initiative"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>

        <div className="px-2 md:px-4">
          <h2 className="text-[clamp(2rem,3.4vw,3.15rem)] font-bold leading-[1.02] text-[#14161b]">
            A Legacy of Local
            <br />
            <span className="text-[#bf3f12]">Humanitarian Impact</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#666974]">
            Born from the vibrant spirit of Trincomalee, our club represents the next generation of
            leadership. We do not just volunteer; we architect solutions for our community's most
            pressing challenges.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#666974]">
            From environmental conservation along our pristine coastline to educational support for
            underserved schools, every action we take is driven by empathy and the "Heroes" spirit.
          </p>

          <ul className="mt-7 space-y-3 text-sm font-medium tracking-wide text-[#21232a]">
            {homeHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#bf3f12] shadow-[0_0_0_4px_rgba(191,63,18,0.14)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LegacySection
