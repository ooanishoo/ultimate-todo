import React, { PropsWithChildren, ReactElement } from 'react'

const Tag = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <button className="rounded-md bg-zinc-600 py-1.5 px-2">{children}</button>
  )
}

const Tags = () => {
  return (
    <div className="p-2">
      <h2 className="p-2 text-xs font-bold text-gray-500">Tags</h2>
      <div className="flex flex-wrap [&>*]:mr-2">
        <Tag>All tags</Tag>
        <Tag>#tailwindcss</Tag>
        <Tag>#gym</Tag>
      </div>
    </div>
  )
}

export default Tags
