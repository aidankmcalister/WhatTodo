import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { useAuth } from 'src/auth'

import Button from '../Button/Button'

const HeroSection = () => {
  const { signUp } = useAuth()

  return (
    <div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Organize your tasks effortlessly.
            <br />
            Start managing your todos today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-500">
            Never miss a beat with this intuitive todo app. Easily add,
            complete, and manage tasks to stay on top of your day.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={signUp}
              className="flex items-center px-4 py-3 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
              <ArrowRightIcon className="ml-2 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
