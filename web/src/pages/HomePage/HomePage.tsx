import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Header />
      <section className="p-5"></section>
      <Footer />
    </>
  )
}

export default HomePage
