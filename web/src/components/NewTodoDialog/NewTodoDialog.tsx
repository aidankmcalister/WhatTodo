import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { TextField, Label, Form } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

export const CREATE_TODO_ITEM_MUTATION = gql`
  mutation CreatTodoItemMutation($input: CreateTodoItemInput!) {
    createTodoItem(input: $input) {
      id
      title
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="text-center sm:mt-3">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    New Todo Item
                  </Dialog.Title>
                  <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                  >
                    <div className="flex flex-col">
                      <Label name="title" className="font-semibold">
                        Title
                      </Label>
                      <TextField
                        name="title"
                        validation={{ required: true }}
                        className="rounded-md border px-2 py-1"
                      />
                    </div>

                    <button
                      className="rounded-md border px-2 py-1"
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
