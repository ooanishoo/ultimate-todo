import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AddListButton } from '../../components/AddListButton'
import AddListModal from '../../components/AddListModal'
import Tags from '../../components/Tags'
import { TodoCards } from '../../components/TodoCards'
import TodoCategories from '../../components/TodoCategories'
import { ITodoList } from '../../components/types'

const SearchBar = () => (
  <label className="relative block">
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <BsSearch />
    </span>
    <input
      type="search"
      aria-label="search"
      role={'searchbox'}
      placeholder="Search"
      className="w-full  rounded-md bg-neutral-600 py-2 pl-9 pr-3 text-xs placeholder-gray-400  focus:outline-none focus:ring-1 focus:ring-sky-500  "
    />
  </label>
)

export const Sidebar = (): React.ReactElement => {
  const [showDialog, setShowDialog] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 box-border flex h-full w-72 flex-col gap-4 overflow-y-auto border-r border-black bg-neutral-800 p-2 text-white first:pt-11">
      <SearchBar />
      <TodoCards />
      <TodoCategories />
      <Tags />
      {showDialog && (
        <AddListModal
          OnDismiss={() => setShowDialog(false)}
          OnSubmit={(todoList: ITodoList) => alert(JSON.stringify(todoList))}
        />
      )}
      <AddListButton onClick={() => setShowDialog(true)} />
    </nav>
  )
}
