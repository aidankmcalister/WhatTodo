import React, { useEffect, useReducer } from 'react'

import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline'
import {
  ListBulletIcon,
  MoonIcon as MoonIconSolid,
} from '@heroicons/react/24/solid'
import Cookies from 'js-cookie'

import { useAuth } from 'src/auth'
import Button from 'src/components/Button/Button'

const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state
    default:
      return state
  }
}

const Header = () => {
  const { isAuthenticated, currentUser, signUp, logIn, logOut } = useAuth()

  const [darkMode, dispatch] = useReducer(reducer, false, () => {
    const darkModeCookie = Cookies.get('darkMode')
    return darkModeCookie ? JSON.parse(darkModeCookie) : false
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    Cookies.set('darkMode', darkMode, { expires: 365 })
  }, [darkMode])

  return (
    <header className="flex items-center justify-between space-x-3 border-b p-5 shadow-sm dark:border-gray-800 dark:shadow-md ">
      <ListBulletIcon className="w-10 dark:text-white" />
      <div className="flex items-center justify-between space-x-3">
        {isAuthenticated && (
          <div className="flex items-center space-x-3">
            <img
              className="h-8 w-8 rounded-full border"
              src={currentUser.picture as string}
              alt="Avatar"
            />
            <p className="dark:text-white">{currentUser.name as string}</p>
          </div>
        )}

        {!isAuthenticated && (
          <div className="flex items-center space-x-3">
            <Button onClick={signUp}>Sign Up</Button>
            <Button onClick={logIn}>Log In</Button>
          </div>
        )}
        {isAuthenticated && <Button onClick={logOut}>Log Out</Button>}
        <button onClick={() => dispatch({ type: TOGGLE_DARK_MODE })}>
          {darkMode ? (
            <MoonIconSolid className="h-9 w-9 rounded-full p-1 text-white hover:bg-gray-700" />
          ) : (
            <MoonIconOutline className="h-9 w-9 rounded-full p-1 text-main-dark-gray hover:bg-gray-200" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
