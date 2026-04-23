const inquiryTags = ['General Inquiry', 'Volunteering', 'Donations', 'Partnerships']

const contactCards = [
  {
    icon: '📍',
    label: 'ADDRESS',
    value: ['123 Inner Harbour Road,', 'Trincomalee, Sri Lanka'],
  },
  {
    icon: '@',
    label: 'EMAIL',
    value: ['hello@trincoheroes.org'],
  },
  {
    icon: '📞',
    label: 'PHONE',
    value: ['+94 26 222 4567'],
  },
]

function ContactPage() {
  return (
    <main className="w-full pb-14">
      <section className="mx-auto grid w-full max-w-[1220px] gap-8 px-5 pb-12 pt-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8 lg:pt-16">
        <div>
          <p className="inline-block rounded-full bg-[#f8d9cf] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#ad4525]">
            CONNECT WITH US
          </p>

          <h1 className="mt-6 text-[clamp(2.7rem,6vw,5.1rem)] font-bold leading-[0.95] text-[#17181e]">
            Contact <span className="text-[#bf3f12]">Us</span>.
          </h1>

          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-[#646974]">
            Every hero needs a team. Whether you are looking to volunteer, partner, or ask a question, our doors in
            Trincomalee are always open.
          </p>
        </div>

        <article className="relative h-[300px] overflow-hidden rounded-[28px] bg-[#16171d] shadow-[0_24px_60px_rgba(16,18,25,0.35)] sm:h-[380px] lg:h-[420px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(242,132,90,0.28),transparent_48%),radial-gradient(circle_at_80%_25%,rgba(123,159,206,0.24),transparent_50%),radial-gradient(circle_at_50%_82%,rgba(191,63,18,0.28),transparent_52%)]" />

          <div className="relative flex h-full items-center justify-center">
            <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full border-[10px] border-[#d6d3d2] bg-[radial-gradient(circle_at_50%_45%,#405568_0%,#2e3843_48%,#1c1e24_72%)] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_0_10px_rgba(18,19,24,0.65)] sm:h-[280px] sm:w-[280px] lg:h-[315px] lg:w-[315px]">
              <div className="h-[66%] w-[66%] rounded-full border border-white/15 bg-[radial-gradient(circle_at_40%_38%,#677f90_0%,#364752_55%,#20242d_100%)]" />
            </div>

            <p className="absolute top-8 text-[clamp(1.05rem,2.3vw,1.8rem)] font-medium uppercase tracking-[0.22em] text-[#d8d6d3]">
              Contact Our Work
            </p>
          </div>
        </article>
      </section>

      <section className="border-y border-black/5 bg-[#e9e8ed] py-12">
        <div className="mx-auto grid w-full max-w-[1220px] gap-8 px-5 lg:grid-cols-[0.78fr_1.45fr] lg:gap-10 lg:px-8">
          <aside>
            <h2 className="text-[clamp(2rem,4vw,2.7rem)] font-bold leading-tight text-[#161821]">Get In Touch</h2>
            <p className="mt-4 max-w-[290px] text-[0.98rem] leading-relaxed text-[#666b75]">
              Reach out via any of these channels. Our team typically responds within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((card) => (
                <article key={card.label} className="rounded-2xl bg-[#f7f7fa] p-5 shadow-[0_8px_18px_rgba(16,18,25,0.04)]">
                  <p className="text-base text-[#b84218]">{card.icon}</p>
                  <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-[#6b707a]">{card.label}</p>
                  <div className="mt-2 space-y-1 text-[1rem] leading-relaxed text-[#21242d]">
                    {card.value.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <article className="rounded-[26px] bg-[#f7f7fa] p-6 shadow-[0_14px_30px_rgba(16,18,24,0.05)] sm:p-8 lg:p-10">
            <h2 className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-tight text-[#161821]">Message Us</h2>
            <p className="mt-2 text-[0.98rem] text-[#6a6f79]">Fill out the form below and we will connect you with the right department.</p>

            <form className="mt-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#585e69]">FULL NAME</span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 h-12 w-full rounded-xl border border-transparent bg-[#ececf1] px-4 text-sm text-[#23262e] outline-none transition-colors placeholder:text-[#9ea3ad] focus:border-[#bf3f12]/30"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#585e69]">EMAIL ADDRESS</span>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-transparent bg-[#ececf1] px-4 text-sm text-[#23262e] outline-none transition-colors placeholder:text-[#9ea3ad] focus:border-[#bf3f12]/30"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="text-[10px] font-semibold tracking-[0.16em] text-[#585e69]">HOW CAN WE HELP?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {inquiryTags.map((tag, index) => (
                    <button
                      type="button"
                      key={tag}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                        index === 0
                          ? 'bg-gradient-to-r from-[#9e2d08] to-[#cf4b1e] text-white shadow-[0_10px_22px_rgba(159,48,14,0.3)]'
                          : 'bg-[#ececf1] text-[#666b76] hover:bg-[#e4e4ea]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-[#585e69]">YOUR MESSAGE</span>
                <textarea
                  rows={5}
                  placeholder="Tell us more about your interests or questions..."
                  className="mt-2 w-full rounded-2xl border border-transparent bg-[#ececf1] px-4 py-3 text-sm text-[#23262e] outline-none transition-colors placeholder:text-[#9ea3ad] focus:border-[#bf3f12]/30"
                />
              </label>

              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a03009] to-[#d14d1f] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(159,48,14,0.35)] transition-transform duration-300 hover:-translate-y-0.5">
                Send Message
                <span aria-hidden="true">➤</span>
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1220px] px-5 lg:px-8">
        <article className="relative h-[270px] overflow-hidden rounded-[30px] bg-[#8f9299] shadow-[0_14px_28px_rgba(14,17,24,0.18)] sm:h-[330px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_52%,rgba(235,236,241,0.68)_0%,rgba(232,233,238,0.46)_20%,transparent_21%),radial-gradient(circle_at_52%_52%,rgba(233,234,239,0.6)_0%,transparent_42%)]" />

          <div className="absolute left-5 top-5 rounded-2xl bg-[#f8f8fa] px-5 py-4 shadow-[0_10px_22px_rgba(18,19,24,0.14)]">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#ad4525]">OUR BASE</p>
            <p className="mt-1 text-xl font-bold leading-tight text-[#1a1d24]">Harbour Side HQ</p>
            <p className="mt-1 text-sm text-[#616772]">Trincomalee, Sri Lanka</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default ContactPage
