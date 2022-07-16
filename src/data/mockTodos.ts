import { ITodo } from '../components/types'

export const mockTodos: ITodo[] = [
  {
    id: '123',
    title: 'Go to gym',
    notes: 'Today is a chest focused push day',
    tags: ['#gym', '#workout', '#pushday'],
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Do grocerry',
    notes: 'Buy some meat for the whole weak',
    tags: ['#food', '#chores', '#grocery'],
    isCompleted: false,
  },
  {
    id: '3',
    title: 'Develop ultimate-todo app',
    notes: 'Write Content section of the todo app',
    tags: ['#react', '#todo', '#sideproject'],
    isCompleted: true,
  },
]
