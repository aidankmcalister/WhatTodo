import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import TodoCell from 'src/components/TodoCell'

const HomePage = () => {
  return (
    <section className="flex min-h-screen flex-col justify-between">
      <Metadata title="Home" description="Home page" />
      <Header />
      <section className="flex flex-grow flex-col items-center p-5">
        <TodoCell />
      </section>
      <Footer />
    </section>
  )
}

export default HomePage
