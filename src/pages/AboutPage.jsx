import AboutHeroSection from '../components/about/AboutHeroSection'
import AboutIdentitySection from '../components/about/AboutIdentitySection'
import AboutImpactSection from '../components/about/AboutImpactSection'
import AboutLegacyCtaSection from '../components/about/AboutLegacyCtaSection'

function AboutPage() {
  return (
    <main className="w-full pb-16">
      <AboutHeroSection />
      <AboutIdentitySection />
      <AboutImpactSection />
      <AboutLegacyCtaSection />
    </main>
  )
}

export default AboutPage
