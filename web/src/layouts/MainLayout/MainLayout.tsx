import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="flex min-h-screen flex-col justify-between">
      <Header />
      <section className="flex flex-grow flex-col items-center p-5">
        {children}
      </section>
      {/* <Footer /> */}
    </section>
  )
}

export default MainLayout
