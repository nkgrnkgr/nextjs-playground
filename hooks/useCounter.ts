import { useRecoilState } from "recoil";
import { counterFamily } from "../state/Counter";

export const useCounter = (counterId: string) => {
  const [count, setCount] = useRecoilState(counterFamily(counterId));

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
