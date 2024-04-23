import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

const HomePage = () => {
  return (
    <section className="flex min-h-screen flex-col justify-between">
      <Metadata title="Home" description="Home page" />
      <Header />
      <section className="p-5"></section>
      <Footer />
    </section>
  )
}

export default HomePage
