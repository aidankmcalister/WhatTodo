import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, userMetadata, currentUser, signUp } = useAuth()

  const handleClick = () => {
    console.log(userMetadata)
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <header className="flex items-center space-x-3 border-b p-5 shadow-sm">
        <p>{JSON.stringify({ isAuthenticated })}</p>
        {/* <img src={currentUser.profile} alt={currentUser.name} /> */}
        <button
          className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
          onClick={signUp}
        >
          Sign Up
        </button>
        <button
          className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
          onClick={handleClick}
        >
          Test Query
        </button>
      </header>
      <section className="p-5">
        User Metadata
        <p>{JSON.stringify({ userMetadata })}</p>
        <br />
        Current User
        <p>{JSON.stringify({ currentUser })}</p>
      </section>
    </>
  )
}

export default HomePage
