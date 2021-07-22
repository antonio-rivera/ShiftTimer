import { atom } from "jotai";

//List of items for time sheet management
const [sheetItems, setSheetItems] = atom([]);

//Devops item data/state
const [sheetItem, setSheetItem] = atom({
  id,
  devItemId,
  time,
  timestamp,
  title,
});

const [total, setTotal] = atom("");
