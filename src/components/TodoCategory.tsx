import { ReactElement } from 'react'
import { BsListUl } from 'react-icons/bs'
import Icon from './Icon'

interface ITodoCategoryProps {
  name: string
  count: number
}

const TodoCategory = ({ name, count }: ITodoCategoryProps): ReactElement => {
  return (
    <li className="flex justify-between rounded p-2 text-sm">
      <div className="flex">
        <Icon className="mr-2" iconType={<BsListUl size={14} />} />
        <span>{name}</span>
      </div>
      <span className="text-gray-400">{count}</span>
    </li>
  )
}

export default TodoCategory
