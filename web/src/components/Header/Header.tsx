import React, { Fragment, useEffect, useReducer } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline'
import {
  ListBulletIcon,
  // ChevronDownIcon,
  MoonIcon as MoonIconSolid,
} from '@heroicons/react/24/solid'
import Cookies from 'js-cookie'

import { navigate, routes } from '@redwoodjs/router'

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
      <button
        onClick={() => navigate(routes.home())}
        className="flex items-center space-x-2"
      >
        <ListBulletIcon className="w-10 rounded-full bg-main-red p-1.5 text-white dark:bg-white dark:text-main-red" />
        <h1 className="text-xl font-medium text-main-red dark:text-white">
          WhatTodo
        </h1>
      </button>
      <div className="flex items-center justify-between space-x-3">
        {isAuthenticated && (
          <>
            {/* <div className="hidden items-center space-x-3 rounded-md bg-neutral-100 p-2 font-medium md:flex dark:bg-gray-800">
              <img
                className="h-8 w-8 rounded-full border border-main-red"
                src={currentUser.picture as string}
                alt="Avatar"
              />
              <p className="dark:text-white">{currentUser.name as string}</p>
            </div> */}
            <MobileMenu logOut={logOut} currentUser={currentUser} />
          </>
        )}

        {!isAuthenticated && (
          <div className="flex items-center space-x-3">
            <Button className="px-4 py-3" onClick={signUp}>
              Sign Up
            </Button>
            <Button className="hidden px-4 py-3 md:block" onClick={logIn}>
              Log In
            </Button>
          </div>
        )}
        {isAuthenticated && (
          <Button
            className="hidden h-full px-4 py-3 md:block"
            onClick={() => navigate(routes.todos())}
          >
            My Todos
          </Button>
        )}
        <button onClick={() => dispatch({ type: TOGGLE_DARK_MODE })}>
          {darkMode ? (
            <MoonIconSolid className="h-9 w-9 rounded-full p-1 text-white hover:bg-gray-700" />
          ) : (
            <MoonIconOutline className="h-9 w-9 rounded-full p-1 text-main-red hover:bg-gray-200" />
          )}
        </button>
      </div>
    </header>
  )
}

const MobileMenu = ({ logOut, currentUser }) => {
  return (
    <Popover className="relative flex items-center ">
      <Popover.Button className="inline-flex items-center gap-x-1">
        <div className="flex items-center space-x-3 rounded-md bg-neutral-100 p-2 dark:bg-gray-800">
          <img
            className="h-8 w-8 rounded-full border border-main-red"
            src={currentUser.picture as string}
            alt="Avatar"
          />
          <p className="hidden md:block dark:text-white">
            {currentUser.name as string}
          </p>
        </div>
        {/* <ChevronDownIcon
          className="h-5 w-5 dark:text-white"
          aria-hidden="true"
        /> */}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-32 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-auto shrink rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
            <Button className="w-32" onClick={logOut}>
              Log Out
            </Button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
