import React, { ReactElement } from 'react'
import { TodoCard } from './TodoCard'
import {
  BsInboxFill,
  BsCalendar3,
  BsCalendarDate,
  BsFlagFill,
} from 'react-icons/bs'

export const TodoCards = (): ReactElement => {
  return (
    <div
      className="flex w-72 flex-row flex-wrap [&>*]:flex-auto"
      data-testid="todo-cards"
    >
      <TodoCard
        key={1}
        text="Today"
        icon={<BsCalendarDate size={14} />}
        todoCount={4}
        data-testid="todo-card"
      />
      <TodoCard
        key={2}
        text="Scheduled"
        icon={<BsCalendar3 size={14} />}
        todoCount={4}
        data-testid="todo-card"
      />
      <TodoCard
        key={3}
        text="All"
        icon={<BsInboxFill size={14} />}
        todoCount={28}
        data-testid="todo-card"
      />
      <TodoCard
        key={4}
        text="Flagged"
        icon={<BsFlagFill size={14} />}
        todoCount={0}
        data-testid="todo-card"
      />
    </div>
  )
}
