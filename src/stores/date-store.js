import { writable } from "svelte/store";
import { getMonthName } from "../utils/date-time";

const d = new Date();

export const date = writable({
  date: d.getDate(),
  month: getMonthName(d.getMonth()),
  year: d.getFullYear(),
  _d: d
});
