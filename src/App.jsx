import CtaSection from './components/CtaSection'
import HeroSection from './components/HeroSection'
import LegacySection from './components/LegacySection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import StatsSection from './components/StatsSection'

function App() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1220px] px-5 pb-16 pt-10 lg:px-8 lg:pt-14">
        <HeroSection />
        <LegacySection />
        <StatsSection />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
