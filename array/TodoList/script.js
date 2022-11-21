(() => {
    // do {
    // } while (condition);


    const todos = ["Buy milk", "Eat dinner", "Nap"];
    let input;
    do {
        input = prompt("What would you like to do?");
        if (input === "list") {
            printList();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
    } while (input !== "quit");

    console.log("OK, YOU QUIT THE APP");


    function printList() {
        console.log("***** printing list *****");
        todos.forEach((todo, i) => {
            console.log(`${i}: ${todo}`);
        });
        console.log("***********************");
    }

    function addTodo() {
        const newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added todo");
    }

    function deleteTodo() {
        // const theTodo = prompt("Enter the todo to delete");
        // const i = todos.indexOf(theTodo);
        // todos.splice(i, 1);
        var index = prompt("Enter index of todo to delete");
        todos.splice(+index, 1);
        console.log("Deleted todo");
    }
})();