// components/RemoveTodo.tsx
import { usetodoStore } from "../storage/todoStore";

interface Props {
  index: number;
}

export default function RemoveTodo({ index }: Props) {
  const removeTodo = usetodoStore((state) => state.removeTodo);

  return (
    <button onClick={() => removeTodo(index)}>
      ลบ
    </button>
  );
}