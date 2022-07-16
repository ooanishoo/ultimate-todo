import React, { PropsWithChildren, ReactElement } from "react";

const Tag = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <button className="py-1.5 px-2 bg-zinc-600 rounded-md">{children}</button>
  );
};

const Tags = () => {
  return (
    <div className="p-2">
      <h2 className="text-xs p-2 font-bold text-gray-500">Tags</h2>
      <div className="flex flex-wrap [&>*]:mr-2">
        <Tag>All tags</Tag>
        <Tag>#tailwindcss</Tag>
        <Tag>#gym</Tag>
      </div>
    </div>
  );
};

export default Tags;
