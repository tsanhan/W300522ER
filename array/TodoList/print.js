export function printList(todos) {
    console.log("***** printing list *****");
    todos.forEach((todo, i) => {
        console.log(`${i}: ${todo}`);
    });
    console.log("***********************");
}