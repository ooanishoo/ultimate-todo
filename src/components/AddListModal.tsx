import Dialog from '@reach/dialog'
import React from 'react'
import '@reach/dialog/styles.css'
import { ITodoCategory } from './types'

interface IAddListProps {
  OnDismiss: (event: boolean) => void
  OnSubmit: (todoList: ITodoCategory) => void
}

const AddListModal = ({ OnDismiss, OnSubmit }: IAddListProps) => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newList: ITodoCategory = {
      id: '1',
      title: 'Personal',
      color: '#FFD60A',
      todos: [],
      completedTodos: 0,
    }
    OnSubmit(newList)
  }
  return (
    <Dialog
      onDismiss={() => OnDismiss(false)}
      className="fixed top-0 right-0 left-0 bottom-0 m-auto flex h-2/6 w-1/2 max-w-md flex-col overflow-auto rounded-2xl bg-zinc-800 p-4 text-sm text-white shadow-md"
    >
      <h1 className="pb-2 font-bold">New List</h1>
      <form
        className="mt-4 flex flex-1 flex-col gap-2"
        onSubmit={handleOnSubmit}
      >
        <div className="flex items-center gap-4">
          <label htmlFor="list-name">Name:</label>
          <input
            type="text"
            name="list-name"
            className="flex-auto rounded-md bg-neutral-700 p-2  text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 "
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="list-color" className="mr-2">
            Color:
          </label>
          <div className=" flex items-center">
            <input
              type="radio"
              value="#FE453B"
              name="list-color"
              className="h-4 w-4"
            />
            <label
              htmlFor="color-red"
              className="ml-2 text-sm font-medium text-red-500 "
            >
              Red
            </label>
          </div>
          <div className=" flex items-center">
            <input
              type="radio"
              value="#FE453B"
              name="list-color"
              className="h-4 w-4"
            />
            <label
              htmlFor="color-green"
              className="ml-2 text-sm font-medium text-green-500 "
            >
              Green
            </label>
          </div>
          <div className=" flex items-center">
            <input
              type="radio"
              value="#FFD60A"
              name="list-color"
              className="h-4 w-4"
            />
            <label
              htmlFor="color-yellow"
              className="ml-2 text-sm font-medium text-yellow-400 "
            >
              Yellow
            </label>
          </div>
          <div className=" flex items-center">
            <input
              type="radio"
              value="#FFD60A"
              name="list-color"
              className="h-4 w-4"
            />
            <label
              htmlFor="color-blue"
              className="ml-2 text-sm font-medium text-sky-500 "
            >
              Blue
            </label>
          </div>
        </div>
        <div className="mt-auto flex w-full flex-row-reverse gap-2 ">
          <button
            // disabled
            className="w-14 rounded-md bg-zinc-600 py-1 disabled:bg-zinc-700 disabled:text-neutral-500"
            type="submit"
          >
            OK
          </button>
          <button
            onClick={() => OnDismiss(false)}
            className="w-14 rounded-md bg-zinc-600 py-1"
            type="reset"
          >
            Cancel
          </button>
        </div>
      </form>
    </Dialog>
  )
}

export default AddListModal
