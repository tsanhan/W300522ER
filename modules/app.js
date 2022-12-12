import { longOperation, toggleDNone } from "./addEventListeners.js";


const longBtn = document.querySelector("#long-operation");
const uiBtn = document.querySelector("#show-ui-or-console");
const listElem = document.querySelector("#list");

toggleDNone(uiBtn, listElem);
longOperation(longBtn);

