import React from 'react'
import Tags from '../../components/Tags'
import { TodoCards } from '../../components/TodoCards'
import TodoCategories from '../../components/TodoCategories'
import { BsPlusCircle, BsSearch } from 'react-icons/bs'

const AddList = () => (
  <div className="flex flex-auto flex-col-reverse bg-inherit ">
    <button className="flex items-center">
      <span className="mr-2 flex items-center justify-center">
        <BsPlusCircle />
      </span>
      <span>Add List</span>
    </button>
  </div>
)

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
  return (
    <nav className="fixed top-0 left-0 box-border flex h-full w-80 flex-col overflow-y-auto border-r border-black bg-neutral-700 p-2 text-white [&>*]:mb-4">
      <SearchBar />
      <TodoCards />
      <TodoCategories />
      <Tags />
      <AddList />
    </nav>
  )
}
