import { ReactElement } from "react";
import { BsListUl } from "react-icons/bs";
import Icon from "./Icon";

interface ITodoItemProps {
  name: string;
  count: number;
}

const TodoItem = ({ name, count }: ITodoItemProps): ReactElement => {
  return (
    <li className="flex justify-between p-2 rounded text-sm">
      <div className="flex">
        <Icon className="mr-2" iconType={<BsListUl size={14} />} />
        <span>{name}</span>
      </div>
      <span className="text-gray-400">{count}</span>
    </li>
  );
};

export default TodoItem;
