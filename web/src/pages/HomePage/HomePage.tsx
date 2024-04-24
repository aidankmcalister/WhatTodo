import { Metadata } from '@redwoodjs/web'

import HeroSection from 'src/components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <section className="flex flex-grow flex-col items-center p-5">
        <HeroSection />
      </section>
    </>
  )
}

export default HomePage
