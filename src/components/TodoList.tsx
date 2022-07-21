import React, { ReactElement } from 'react'
import Todo from './Todo'
import { ITodo } from './types'

interface ITodoCategoryProps {
  todos: ITodo[]
}

const TodoList = ({ todos }: ITodoCategoryProps): ReactElement => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
