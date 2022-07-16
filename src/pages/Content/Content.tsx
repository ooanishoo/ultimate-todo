import React from 'react'
import TodoList from '../../components/TodoList'
import { mockTodos } from '../../data/mockTodos'

export const Content = (): React.ReactElement => {
  return (
    <div className="ml-80 flex h-full w-full flex-col bg-zinc-800 text-white">
      <header className="flex h-16 w-full justify-between bg-inherit p-4">
        <h1 className="text-4xl font-bold ">Reminders</h1>
        <h4 className="text-3xl font-semibold">4</h4>
      </header>
      <main className="overflow-y-auto p-4">
        <TodoList todos={mockTodos} />
      </main>
    </div>
  )
}
