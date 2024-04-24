import { ListBulletIcon } from '@heroicons/react/24/solid'

import { useAuth } from 'src/auth'

const Header = () => {
  const { isAuthenticated, currentUser, signUp, logIn, logOut } = useAuth()
  return (
    <header className="flex items-center justify-between space-x-3 border-b p-5 shadow-sm">
      <ListBulletIcon className="w-10" />
      <div className="flex items-center justify-between space-x-3">
        {isAuthenticated && (
          <div className="flex items-center space-x-3">
            <img
              className="h-8 w-8 rounded-full border"
              src={currentUser.picture as string}
              alt="Avatar"
            />
            <p>{currentUser.name as string}</p>
          </div>
        )}

        {!isAuthenticated && (
          <div className="flex items-center space-x-3">
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
          </div>
        )}
        {isAuthenticated && (
          <button
            className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
            onClick={logOut}
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
