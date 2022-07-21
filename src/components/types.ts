export interface ITodo {
  id: string
  title: string
  isCompleted: boolean
  notes?: string
  tags?: string[]
}

export interface ITodoCategory {
  id: string
  title: string
  color: string
  todos: ITodo[] | []
  completedTodos: number
}
