import { writable } from "svelte/store";

const d = new Date();

export const date = writable({
  date: d.getDate(),
  month: d.getMonth(),
  year: d.getFullYear(),
  _d: d
});
