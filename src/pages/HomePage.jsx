import CtaSection from '../components/CtaSection'
import HeroSection from '../components/HeroSection'
import LegacySection from '../components/LegacySection'
import StatsSection from '../components/StatsSection'

function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[1220px] px-5 pb-16 pt-10 lg:px-8 lg:pt-14">
      <HeroSection />
      <LegacySection />
      <StatsSection />
      <CtaSection />
    </main>
  )
}

export default HomePage
