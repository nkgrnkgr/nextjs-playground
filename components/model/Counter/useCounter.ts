import { atom, atomFamily, useRecoilState } from "recoil";

const counterFamily = atomFamily({
  key: "counter",
  default: 0,
});

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
