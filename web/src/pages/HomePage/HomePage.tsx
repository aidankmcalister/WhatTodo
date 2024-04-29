import { Metadata } from '@redwoodjs/web'

import CtaSection from 'src/components/CTASection'
import FeaturesSection from 'src/components/FeaturesSection'
import HeroSection from 'src/components/HeroSection'
import HeroTodoItems from 'src/components/HeroTodoItems'
import TestimonialSection from 'src/components/TestimonialSection'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <section className="flex flex-grow flex-col items-center space-y-24 md:w-[85%] md:space-y-32">
        <HeroSection />
        <div className="relative block w-full xl:hidden">
          <HeroTodoItems />
        </div>
        <FeaturesSection />
        <TestimonialSection />
        <CtaSection />
      </section>
    </>
  )
}

export default HomePage
