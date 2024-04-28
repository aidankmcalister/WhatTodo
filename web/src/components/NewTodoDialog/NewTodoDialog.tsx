import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'

import { TextField, TextAreaField, Form } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

export const CREATE_TODO_ITEM_MUTATION = gql`
  mutation CreatTodoItemMutation($input: CreateTodoItemInput!) {
    createTodoItem(input: $input) {
      id
      title
      description
      userId
    }
  }
`

const NewTodoDialog = ({ open, setOpen }) => {
  const { currentUser } = useAuth()

  const [createTodoItem, { loading }] = useMutation(CREATE_TODO_ITEM_MUTATION, {
    onCompleted: (data) => {
      setOpen(false)
    },
    onError: (error) => {},
    refetchQueries: ['FindTodosByUserQuery'],
  })

  const handleSubmit = (values) => {
    createTodoItem({
      variables: {
        input: {
          ...values,
          userId: currentUser.id,
        },
      },
    })
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 dark:bg-gray-800">
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
                    What do you need to do?
                  </Dialog.Title>
                  <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                  >
                    <TextField
                      name="title"
                      validation={{ required: true }}
                      className="rounded-md border px-2 py-1 dark:border-none dark:bg-gray-600 dark:text-gray-200"
                    />
                    <TextAreaField
                      name="description"
                      validation={{ required: true }}
                      className="rounded-md border px-2 py-1 dark:border-none dark:bg-gray-600 dark:text-gray-200"
                    />

                    <button
                      className="mb-3 w-full cursor-pointer rounded-md bg-main-red px-3  py-1 font-medium text-white shadow-sm  hover:bg-gray-200 hover:bg-main-red/90"
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NewTodoDialog
