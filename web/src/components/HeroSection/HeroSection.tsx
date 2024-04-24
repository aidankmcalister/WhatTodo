import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

/* eslint-disable jsx-a11y/anchor-is-valid */
const HeroSection = () => {
  const { isAuthenticated, signUp } = useAuth()

  if (isAuthenticated) {
    navigate(routes.todos())
  }

  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Organize your tasks effortlessly.
            <br />
            Start managing your todos today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Never miss a beat with this intuitive todo app. Easily add,
            complete, and prioritize tasks to stay on top of your day.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={signUp}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </button>
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
