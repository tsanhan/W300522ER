export function addTodo(todos) {
    const newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added todo");
}