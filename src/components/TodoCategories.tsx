import TodoCategory from './TodoCategory'

const todos = [
  {
    name: 'Reminders',
    count: 4,
  },
  {
    name: 'Shopping',
    count: 24,
  },
  {
    name: 'Personal',
    count: 34,
  },
  {
    name: 'Work',
    count: 3,
  },
]

const TodoCategories = () => {
  return (
    <>
      <h2 className="p-2 text-xs font-bold text-gray-500">My Lists</h2>
      <ul>
        {todos.map(({ name, count }) => (
          <TodoCategory name={name} count={count} />
        ))}
      </ul>
    </>
  )
}

export default TodoCategories
