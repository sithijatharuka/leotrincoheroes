const serviceCards = [
  {
    icon: '◎',
    title: 'We Support Children and Youth',
    description:
      'Providing essential resources and educational tools to the next generation of leaders in our community.',
    tone: 'warm',
  },
  {
    icon: '⚑',
    title: 'We Find and Fund',
    description:
      'Identifying critical local needs and mobilizing financial resources to create sustainable humanitarian impact.',
    tone: 'warm',
  },
  {
    icon: '↗',
    title: 'We Educate',
    description:
      'Workshops and skill-building programs designed to bridge the digital and professional divide for local youth.',
    tone: 'cool',
  },
  {
    icon: '▣',
    title: 'We Provide',
    description:
      'Direct distribution of medical supplies, clean water, and nutritional support to underserved families.',
    tone: 'warm',
  },
  {
    icon: '∴',
    title: 'We Lead',
    description:
      'Fostering a culture of accountability and excellence within our club to inspire broader social change.',
    tone: 'warm',
  },
  {
    icon: '✦',
    title: 'We Inspire',
    description:
      'Sharing stories of resilience and courage to ignite the spirit of volunteerism across the Eastern Province.',
    tone: 'cool',
  },
  {
    icon: '◒',
    title: 'We Protect',
    description:
      "Dedicated conservation efforts focused on protecting Trincomalee's unique coastal ecosystem and marine life.",
    tone: 'warm',
  },
]

const impactStats = [
  {
    value: '42+',
    label: 'Successful humanitarian projects delivered this year.',
    bg: 'bg-[#d64a00]',
    fg: 'text-white',
  },
  {
    value: '5,000+',
    label: 'Lives impacted',
    bg: 'bg-[#ececf0]',
    fg: 'text-[#1b1d24]',
  },
  {
    value: '12',
    label: 'Active partnerships',
    bg: 'bg-[#f58f68]',
    fg: 'text-[#1f222a]',
  },
]

function WhatWeDoPage() {
  return (
    <main className="w-full pb-16">
      <section className="mx-auto w-full max-w-[1220px] px-5 pb-10 pt-16 lg:px-8 lg:pb-14 lg:pt-20">
        <h1 className="text-[clamp(2.8rem,7vw,5.2rem)] font-bold leading-[0.96] text-[#14151b]">
          What We <span className="text-[#bf3f12]">Do</span>.
        </h1>

        <p className="mt-5 max-w-xl text-[1.04rem] leading-relaxed text-[#646872]">
          We serve the historic city of Trincomalee through youth empowerment, humanitarian aid, and environmental
          stewardship. Our actions define our legacy.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-black/5 bg-[#f6f6f9] p-6 shadow-[0_8px_18px_rgba(20,22,28,0.03)]">
              <div
                className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold ${
                  card.tone === 'cool' ? 'bg-[#dce7ff] text-[#32539b]' : 'bg-[#f8d8cd] text-[#b23f1b]'
                }`}
              >
                {card.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-tight text-[#181a22]">{card.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#676b75]">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 border-y border-black/5 bg-[#ecebef] py-14">
        <div className="mx-auto grid w-full max-w-[1220px] gap-8 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="inline-block rounded-full bg-[#f6d7cc] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#b4502f]">
              FOUNDATION CORE
            </p>

            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.3rem)] font-bold leading-tight text-[#161821]">
              Leadership through selfless action
            </h2>

            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[#656974]">
              Our members are not just volunteers; they are the architects of change. Through our leadership
              development programs, we transform enthusiasm into strategic civic action.
            </p>

            <div className="mt-6 grid max-w-md gap-3 sm:grid-cols-2">
              <article className="rounded-xl bg-[#f4f4f7] p-4">
                <p className="text-4xl font-bold leading-none text-[#c8471e]">150+</p>
                <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-[#636670]">ACTIVE LEADERS</p>
              </article>
              <article className="rounded-xl bg-[#f4f4f7] p-4">
                <p className="text-4xl font-bold leading-none text-[#c8471e]">24/7</p>
                <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-[#636670]">COMMITMENT</p>
              </article>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=80"
            alt="Blue glowing visual representing leadership and training"
            className="h-[360px] w-full rounded-2xl object-cover shadow-[0_24px_48px_rgba(13,16,24,0.25)]"
          />
        </div>
      </section>

      <section className="mx-auto mt-14 grid w-full max-w-[1220px] gap-8 px-5 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Youth collaborating in a workshop"
          className="h-[300px] w-full rounded-2xl object-cover"
        />

        <div>
          <p className="inline-block rounded-full bg-[#f6d7cc] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#b4502f]">
            REAL IMPACT
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#161821]">
            Experiences that redefine empathy
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-[#666a73]">
            We believe that true understanding comes from being on the ground. Our service projects provide members
            with immersive experiences that bridge cultural and social gaps.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-[#494d57]">
            <li className="flex items-start gap-2">
              <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#d74a00] text-[10px] text-white">
                •
              </span>
              Community outreach programs in rural outskirts
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#d74a00] text-[10px] text-white">
                •
              </span>
              Coastal cleanup and environmental education
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-14 grid w-full max-w-[1220px] gap-8 px-5 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-block rounded-full bg-[#dbe4ff] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#4d64a7]">
            FUTURE READY
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#151821]">Opportunity for every hero</h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-[#676b75]">
            Growth is a right, not a privilege. We provide access to global learning networks, scholarship opportunities,
            and vocational training to ensure our heroes can thrive in a globalized world.
          </p>

          <button className="mt-6 rounded-full bg-[#12141b] px-6 py-3 text-xs font-semibold tracking-[0.08em] text-white transition-transform duration-300 hover:-translate-y-0.5">
            Explore Paths
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
            alt="Laptop and digital network visual"
            className="h-[180px] w-full rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
            alt="World map projection"
            className="h-[180px] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="mt-14 border-y border-black/5 bg-[#eae9ed] py-14">
        <div className="mx-auto grid w-full max-w-[1220px] gap-4 px-5 md:grid-cols-3 lg:px-8">
          {impactStats.map((stat) => (
            <article key={stat.label} className={`rounded-2xl p-6 ${stat.bg} ${stat.fg}`}>
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold leading-none">{stat.value}</p>
              <p className="mt-3 max-w-[260px] text-sm leading-relaxed opacity-90">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default WhatWeDoPage
