export const ATOM_KEYS = {
  COUNTER: "COUNTER",
} as const;

export type AtomKeys = TypeOfValues<typeof ATOM_KEYS>;
