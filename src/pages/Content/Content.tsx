import React from 'react'
import TodoList from '../../components/TodoList'
import { mockTodos } from '../../data/mockTodos'
import { BsPlusLg } from 'react-icons/bs'

export const Content = (): React.ReactElement => {
  return (
    <div className="ml-80 flex h-full w-full flex-col bg-zinc-800 text-white">
      <header className="flex w-full flex-col justify-between  p-4">
        <div className="flex w-full flex-row-reverse">
          <BsPlusLg role="button" className="text-zinc-600" />
        </div>
        <div className="mt-4 flex w-full justify-between">
          <h1 className="text-4xl font-bold ">Reminders</h1>
          <h4 className="text-3xl font-semibold">4</h4>
        </div>
      </header>
      <main className="overflow-y-auto p-4">
        <TodoList todos={mockTodos} />
      </main>
    </div>
  )
}
