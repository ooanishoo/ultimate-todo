import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'

interface IAddListButtonProps {
  onClick: (e: React.MouseEvent) => void
}
export const AddListButton = ({ onClick }: IAddListButtonProps) => (
  <div className="mt-auto flex bg-inherit ">
    <button className="flex items-center" onClick={onClick}>
      <span className="mr-2 flex items-center justify-center">
        <BsPlusCircle />
      </span>
      <span>Add List</span>
    </button>
  </div>
)
