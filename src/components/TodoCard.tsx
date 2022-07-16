import { ReactElement } from "react";

interface ITodoCardProps {
  icon: ReactElement;
  todoCount: number;
  text: string;
}

export const TodoCard = ({
  icon,
  todoCount,
  text,
}: ITodoCardProps): ReactElement => (
  <button className="w-32 h-14 bg-gray-600 rounded-xl p-2 flex flex-col m-1 hover:bg-blue-400">
    <div className="flex flex-row justify-between w-full mb">
      <div className="bg-blue-400 rounded-full w-6 h-6 flex justify-center items-center">
        {icon}
      </div>
      <span className="text-lg font-extrabold">{todoCount}</span>
    </div>
    <p className="text-xs font-semibold">{text}</p>
  </button>
);
