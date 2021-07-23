import { atom } from "jotai";

//List of items for time sheet management
const sheetItems = atom(new Map());
const total = atom("");
