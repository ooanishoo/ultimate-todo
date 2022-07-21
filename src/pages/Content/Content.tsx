import React from 'react'
import TodoList from '../../components/TodoList'
import { mockTodos } from '../../data/mockTodos'
import { BsPlusLg } from 'react-icons/bs'

const TodoCategoryStatus = () => (
  <div className="flex w-full border-b border-neutral-600 py-2">
    <span className="mr-4 text-sm font-bold text-neutral-400">
      25 completed
    </span>
    <div className="flex flex-auto justify-between text-blue-500 ">
      <button>Clear</button>
      <button>Show</button>
    </div>
  </div>
)

export const Content = (): React.ReactElement => {
  const AddTodo = () => (
    <div className="flex w-full flex-row-reverse">
      <BsPlusLg role="button" className="text-zinc-600" />
    </div>
  )
  return (
    <div className="ml-72 flex h-full w-full flex-col bg-zinc-800 text-white">
      <header className="flex w-full flex-col justify-between  px-4 py-2">
        <AddTodo />
        <div className="mt-4 flex w-full justify-between">
          <h1 className="text-4xl font-bold ">Reminders</h1>
          <h4 className="text-3xl font-semibold">4</h4>
        </div>
      </header>
      <main className="overflow-y-auto p-4 text-xs">
        <TodoCategoryStatus />
        <TodoList todos={mockTodos} />
      </main>
    </div>
  )
}
