
import { addTodo } from "./add.js";
import { deleteTodo } from "./delete.js";
import { printList } from "./print.js";

const todos = ["Buy milk", "Eat dinner", "Nap"];
let input;

const inputProm = () => new Promise((resolve, reject) => {
    input = prompt("What would you like to do?");
    resolve(input);
});
const runWhileLoop = async () => {
    do {
        input = await inputProm();
        if (input === "list") {
            printList(todos);
        } else if (input === "new") {
            addTodo(todos);
        } else if (input === "delete") {
            deleteTodo(todos);
        }
    } while (input !== "quit");
};

runWhileLoop();



console.log("OK, YOU QUIT THE APP");



