import { atomFamily } from "recoil";
import { ATOM_KEYS } from "./AtomKeys";

export const counterFamily = atomFamily({
  key: ATOM_KEYS.COUNTER,
  default: 0,
});
