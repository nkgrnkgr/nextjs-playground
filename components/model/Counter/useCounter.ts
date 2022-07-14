import { atom, useRecoilState } from "recoil";

export const useCounter = (counterId: string) => {
  const counterState = atom({
    key: `counter:${counterId}`,
    default: 0,
  });

  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};
