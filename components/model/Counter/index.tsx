import { useCounter } from "./useCounter";

type Props = {
  componentId: string;
};

const Component: React.FC<Props> = ({ componentId }) => {
  const { count, increment, decrement } = useCounter(componentId);

  const handleClickIncrement = () => increment();
  const handleClickDecrement = () => decrement();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handleClickIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={handleClickDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export const Counter = Component;
