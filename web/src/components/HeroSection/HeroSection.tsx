import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { useAuth } from 'src/auth'
import Button from 'src/components/Button'
import HeroTodoItems from 'src/components/HeroTodoItems'

const HeroSection = () => {
  const { signUp } = useAuth()

  return (
    <div className="flex w-full items-center justify-between">
      <div className="pb-0 pt-7 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Organize your tasks effortlessly.
            <br />
            Start managing your todos today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Stay organized and productive with our intuitive todo app.{' '}
            <br className="hidden md:block" />
            Easily add tasks, mark them as complete, and manage your todos{' '}
            <br className="hidden md:block" />
            to stay on top of your day.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
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
      <div className="relative hidden w-[40vw] xl:block">
        <HeroTodoItems />
      </div>
    </div>
  )
}

export default HeroSection
