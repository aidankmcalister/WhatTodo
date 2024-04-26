import { Metadata } from '@redwoodjs/web'

import CtaSection from 'src/components/CTASection'
import FeaturesSection from 'src/components/FeaturesSection'
import HeroSection from 'src/components/HeroSection'
import TestimonialSection from 'src/components/TestimonialSection'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <section className="flex flex-grow flex-col items-center space-y-32 md:w-[85%]">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <CtaSection />
      </section>
    </>
  )
}

export default HomePage
