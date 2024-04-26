import { Metadata } from '@redwoodjs/web'

import FeaturesSection from 'src/components/FeaturesSection/FeaturesSection'
import HeroSection from 'src/components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <section className="flex flex-grow flex-col items-center md:w-[85%]">
        <HeroSection />
        <FeaturesSection />
      </section>
    </>
  )
}

export default HomePage
