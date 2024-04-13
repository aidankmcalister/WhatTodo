import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, userMetadata, currentUser, signUp } = useAuth()

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <header className="flex items-center space-x-3 border-b p-5 shadow-sm">
        <p>{JSON.stringify({ isAuthenticated })}</p>
        {/* <img src={currentUser.profile} alt={currentUser.name} /> */}
        <button onClick={signUp}>sign up</button>
      </header>
      User Metadata
      <p>{JSON.stringify({ userMetadata })}</p>
      Current User
      <p>{JSON.stringify({ currentUser })}</p>
    </>
  )
}

export default HomePage
