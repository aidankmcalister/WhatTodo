import { Metadata } from '@redwoodjs/web'

import CtaSection from 'src/components/CTASection/CtaSection'
import FeaturesSection from 'src/components/FeaturesSection/FeaturesSection'
import HeroSection from 'src/components/HeroSection/HeroSection'
import TestimonialSection from 'src/components/TestimonialSection/TestimonialSection'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <section className="flex flex-grow flex-col items-center md:w-[85%]">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <CtaSection />
      </section>
    </>
  )
}

export default HomePage
