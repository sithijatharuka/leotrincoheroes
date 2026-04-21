function AboutHeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#eeedf0]">
      <img
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80"
        alt="Community members smiling together"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-[#ecebf0]/85" />

      <div className="relative mx-auto w-full max-w-[1220px] px-5 pb-20 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <h1 className="text-[clamp(2.8rem,7vw,5.7rem)] font-bold leading-[0.95] text-[#13151b]">
          About <span className="italic text-[#bf3f12]">Us</span>
        </h1>

        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#666a74]">
          A legacy of service, a future of impact. Discover the heart behind the Trincomalee Heroes.
        </p>
      </div>
    </section>
  )
}

export default AboutHeroSection
