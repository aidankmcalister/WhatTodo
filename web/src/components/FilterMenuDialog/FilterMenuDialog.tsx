import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import {
  CheckCircleIcon,
  MinusCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

import Button from '../Button/Button'

const FilterMenuDialog = ({ open, setOpen, setFilterStates, filterStates }) => {
  const toggleShowCompleted = () => {
    setFilterStates((prev) => ({
      ...prev,
      showCompleted: !prev.showCompleted,
    }))
  }

  const toggleShowIncomplete = () => {
    setFilterStates((prev) => ({
      ...prev,
      showIncomplete: !prev.showIncomplete,
    }))
  }

  const toggleShowDescriptions = () => {
    setFilterStates((prev) => ({
      ...prev,
      showDescriptions: !prev.showDescriptions,
    }))
  }

  const togglePriorityLevel = (level) => {
    setFilterStates((prev) => ({
      ...prev,
      priorityLevels: prev.priorityLevels.includes(level)
        ? prev.priorityLevels.filter((item) => item !== level)
        : [...prev.priorityLevels, level],
    }))
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-64 transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 dark:bg-gray-800">
                <button
                  className="absolute right-5 top-5 hidden rounded-full p-1 hover:bg-gray-200 md:block dark:text-white dark:hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  <XMarkIcon className="w-6" />
                </button>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-90 mb-5 text-base font-semibold leading-6 dark:text-white"
                  >
                    Filters
                  </Dialog.Title>
                  <div className="flex flex-col space-y-3">
                    <Button
                      className={`flex items-center justify-center py-2 ${
                        !filterStates.showCompleted && 'opacity-50'
                      }`}
                      onClick={toggleShowCompleted}
                    >
                      <div className="flex w-32 items-center">
                        <CheckCircleIcon className="mr-3 h-5 w-5" />
                        Completed
                      </div>
                    </Button>
                    <Button
                      className={`flex items-center justify-center py-2 ${
                        !filterStates.showIncomplete && 'opacity-50'
                      }`}
                      onClick={toggleShowIncomplete}
                    >
                      <div className="flex w-32 items-center">
                        <MinusCircleIcon className="mr-3 h-5 w-5" />
                        Incompleted
                      </div>
                    </Button>
                    <Button
                      className={`flex items-center justify-center py-2 ${
                        !filterStates.showDescriptions && 'opacity-50'
                      }`}
                      onClick={toggleShowDescriptions}
                    >
                      <div className="flex w-32 items-center">
                        <DocumentTextIcon className="mr-3 h-5 w-5" />
                        Descriptions
                      </div>
                    </Button>
                    <div className="flex space-x-3">
                      <Button
                        className={`flex w-1/3 items-center justify-center  py-2 ${
                          !filterStates.priorityLevels.includes(1) &&
                          'opacity-50'
                        }`}
                        onClick={() => togglePriorityLevel(1)}
                      >
                        <div className="h-5 w-5 rounded-full bg-green-500/80"></div>
                      </Button>
                      <Button
                        className={`flex w-1/3 items-center justify-center  py-2 ${
                          !filterStates.priorityLevels.includes(2) &&
                          'opacity-50'
                        }`}
                        onClick={() => togglePriorityLevel(2)}
                      >
                        <div className="h-5 w-5 rounded-full bg-yellow-500/80"></div>
                      </Button>
                      <Button
                        className={`flex w-1/3 items-center justify-center py-2 ${
                          !filterStates.priorityLevels.includes(3) &&
                          'opacity-50'
                        }`}
                        onClick={() => togglePriorityLevel(3)}
                      >
                        <div className="h-5 w-5 rounded-full bg-red-500/80"></div>
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default FilterMenuDialog
