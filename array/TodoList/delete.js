export function deleteTodo(todos) {
    // const theTodo = prompt("Enter the todo to delete");
    // const i = todos.indexOf(theTodo);
    // todos.splice(i, 1);
    var index = prompt("Enter index of todo to delete");
    todos.splice(+index, 1);
    console.log("Deleted todo");
}