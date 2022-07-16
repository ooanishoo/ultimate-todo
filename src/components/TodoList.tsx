import React, { ReactElement } from 'react'
import Todo from './Todo'
import { ITodo } from './types'

interface ITodoListProps {
  todos: ITodo[]
}

const TodoList = ({ todos }: ITodoListProps): ReactElement => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
