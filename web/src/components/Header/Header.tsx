import { ListBulletIcon } from '@heroicons/react/24/solid'

import { useAuth } from 'src/auth'
import Button from 'src/components/Button/Button'

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
            <Button
              // className="cursor-pointer rounded-md border bg-main-red px-2 py-1 font-medium text-white shadow-sm hover:bg-gray-200"
              onClick={signUp}
            >
              Sign Up
            </Button>
            <Button
              // className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
              onClick={logIn}
            >
              Log In
            </Button>
          </div>
        )}
        {isAuthenticated && (
          <Button
            // className="cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
            onClick={logOut}
          >
            Log Out
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
