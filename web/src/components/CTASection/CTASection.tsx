import { ArrowRightIcon } from '@heroicons/react/24/outline'

import { useAuth } from 'src/auth'
import Button from 'src/components/Button'

const CtaSection = () => {
  const { signUp } = useAuth()
  return (
    <section className="flex flex-col items-center justify-center space-y-5 md:items-start">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Ready to Get Started?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-500 md:text-start">
        Sign up now and start managing your tasks more effectively than ever
        before.
      </p>

      <div className="mt-10 flex items-center gap-x-6">
        <Button
          onClick={signUp}
          className="flex items-center px-4 py-3 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Sign Up Now
          <ArrowRightIcon className="ml-2 w-5" />
        </Button>
      </div>
    </section>
  )
}

export default CtaSection

// Call to Action Section:

// Title: "Ready to Get Started?"
// Description: "Sign up now and start managing your tasks more effectively than ever before."
// Call to Action Button: "Sign Up Now"
