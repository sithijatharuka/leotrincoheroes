function CtaSection() {
  return (
    <section className="mt-14 overflow-hidden rounded-[36px] bg-[linear-gradient(130deg,#11131a_0%,#11131a_55%,#3f1f16_100%)] p-7 text-white md:px-12 md:py-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1]">
            Ready to become a Hero
            <br />
            in your community?
          </h2>
          <p className="mt-5 max-w-lg text-base text-white/80">
            We're always looking for passionate youth ready to lead. Applications are open year-round.
          </p>
        </div>

        <button className="w-fit rounded-full border border-white/40 bg-white px-9 py-3 text-base font-medium text-[#181a1f] transition duration-300 hover:bg-transparent hover:text-white">
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default CtaSection
