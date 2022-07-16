import React from 'react'
import { ITodo } from './types'
import { BsInfoCircle } from 'react-icons/bs'

export interface ITodoProps {
  todo: ITodo
}

export const Todo = ({ todo }: ITodoProps) => {
  const { id, title, notes, tags, isCompleted } = todo
  const updatedTags = tags?.toString().replaceAll(',', ' ')
  return (
    <li className="w-full text-xs" key={id}>
      <div className="flex">
        <div className=" flex w-7 flex-col justify-start pt-2">
          <input
            type="checkbox"
            name="todo-checkbox"
            className="h-4 w-4 rounded-full border-none outline-none "
            checked={isCompleted}
          />
        </div>
        <div className="flex flex-auto border-b border-neutral-600">
          <div className="flex flex-auto flex-col py-2">
            <input
              type="text"
              name="todo-title"
              className=" bg-inherit placeholder:text-neutral-500 focus:outline-none"
              value={title}
            />
            <input
              type="text"
              name="todo-notes"
              className=" bg-inherit text-neutral-500 placeholder:text-neutral-200 focus:outline-none"
              placeholder="Notes"
              value={notes}
            />
            <input
              type="text"
              name="todo-tags"
              className=" bg-inherit text-sm text-slate-500 placeholder:text-neutral-500 focus:outline-none"
              placeholder="Add Tags"
              value={updatedTags}
            />
          </div>
          <div className="flex w-8 flex-row-reverse items-center">
            <BsInfoCircle size={14} role="button" />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Todo
