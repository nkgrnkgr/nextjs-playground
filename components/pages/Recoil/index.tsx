import { Counter } from "../../model/Counter";
import { useCounter } from "../../model/Counter/useCounter";

const Component: React.FC = () => {
  const {} = useCounter("1");

  return (
    <div>
      <Counter componentId="1" />
      <Counter componentId="2" />
      <Counter componentId="3" />
    </div>
  );
};

export const Recoil = Component;
