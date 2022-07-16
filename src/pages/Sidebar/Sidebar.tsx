import React from "react";
import Tags from "../../components/Tags";
import { TodoCards } from "../../components/TodoCards";
import TodoList from "../../components/TodoList";
import { BsPlusCircle, BsSearch } from "react-icons/bs";

const AddList = () => (
  <div className="flex-1 flex flex-col-reverse">
    <button className="flex items-center">
      <span className="flex justify-center items-center mr-2">
        <BsPlusCircle />
      </span>
      <span>Add List</span>
    </button>
  </div>
);

const SearchBar = () => (
  <label className="relative block">
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <BsSearch />
    </span>
    <input
      type="search"
      aria-label="search"
      role={"searchbox"}
      placeholder="Search"
      className="w-full rounded-md py-2 pl-9 pr-3 bg-gray-600 placeholder-gray-400 text-xs focus:outline-none  focus:ring-1 focus:ring-sky-500 "
    />
  </label>
);

export const Sidebar = (): React.ReactElement => {
  return (
    <div className="[&>*]:mb-4 bg-gray-700 text-white border-r border-black w-max box-border p-2 flex flex-col h-screen">
      <SearchBar />
      <TodoCards />
      <TodoList />
      <Tags />
      <AddList />
    </div>
  );
};
