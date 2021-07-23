import { atom } from "jotai";

//Map for relationships between devops items and sheet items
const [connections, setConnections] = atom(new Map());
