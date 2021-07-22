import { atom } from "jotai";

//List of items for devops time management
const [devItems, setDevItems] = atom([]);

//Devops item data/state
const [devItem, setDevItem] = atom({
  id,
  title,
  sheetItemId,
  completed,
  remaining,
  original_estimate,
  timestamp,
});
