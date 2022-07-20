export const ATOM_KEYS = {
  COUNTER: "COUNTER",
  ASYNC_USER: "ASYNC_USER",
} as const;

export type AtomKeys = TypeOfValues<typeof ATOM_KEYS>;
