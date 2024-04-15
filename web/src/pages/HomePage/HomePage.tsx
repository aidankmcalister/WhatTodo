import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, userMetadata, currentUser, signUp, logIn, logOut } =
    useAuth()

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <header className="flex items-center space-x-3 border-b p-5 shadow-sm">
        {isAuthenticated && (
          <div className="flex items-center space-x-3">
            <img
              className="h-8 rounded-full"
              src={currentUser.picture}
              alt={currentUser.name}
            />
            <p>{currentUser.name}</p>
          </div>
        )}
        <button
          className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
          onClick={signUp}
        >
          Sign Up
        </button>
        <button
          className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
          onClick={logIn}
        >
          Log In
        </button>
        <button
          className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
          onClick={logOut}
        >
          Log Out
        </button>
      </header>
      <section className="p-5">{JSON.stringify(currentUser)}</section>
    </>
  )
}

export default HomePage
