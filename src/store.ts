import { writable } from "svelte/store";

type Todos = {
  id: string;
  value: string;
};

export const todos = writable<Array<Todos>>([]);
