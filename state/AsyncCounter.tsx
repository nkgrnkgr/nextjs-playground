import { atom, selector } from "recoil";
import { ATOM_KEYS } from "./AtomKeys";

type User = {
  id: number;
  name: string;
};

const num = Math.floor(Math.random() * (10 + 1 - 1)) + 1;

export const asyncUser = selector({
  key: ATOM_KEYS.ASYNC_USER,
  get: async () => {
    const a = await fetch(`https://pokeapi.co/api/v2/pokemon-color/1`).then(
      (response) => response.json()
    );
    return a;
  },
});
