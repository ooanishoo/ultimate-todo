import { ReactElement } from 'react'

interface ITodoCardProps {
  icon: ReactElement
  todoCount: number
  text: string
}

export const TodoCard = ({
  icon,
  todoCount,
  text,
}: ITodoCardProps): ReactElement => (
  <button className="m-1 flex h-14 w-32 flex-col rounded-xl bg-zinc-600 p-2 hover:bg-blue-400">
    <div className="mb flex w-full flex-row justify-between">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400">
        {icon}
      </div>
      <span className="text-lg font-extrabold">{todoCount}</span>
    </div>
    <p className="text-xs font-semibold">{text}</p>
  </button>
)
