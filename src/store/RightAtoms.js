import { atom } from "jotai";

//List of items for time sheet management
export const sheetItems = atom(new Map());
export const total = atom("");
