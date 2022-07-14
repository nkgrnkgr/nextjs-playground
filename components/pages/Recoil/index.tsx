import { Counter } from "../../model/Counter";

const Component: React.FC = () => {
  return (
    <div>
      <Counter componentId="1" />
      <Counter componentId="2" />
      <Counter componentId="3" />
    </div>
  );
};

export const Recoil = Component;
