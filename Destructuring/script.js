(function () {

    // 1. Destructuring
    // Array
    {
        const fruits = ['Apple', 'Banana', 'Orange'];
        const [a, b, c] = fruits;
        console.log(a); // Apple
        console.log(b); // Banana
        console.log(c); // Orange
    }
    // Object
    {
        let user = { name: 'John', age: 17 };
        const { name, age } = user;
        console.log(name); // John
        console.log(age); // 17
    }
    // 2. Spread syntax ...
    {
        const fruits = ['Apple', 'Banana', 'Orange'];
        const [a, ...rest] = fruits;
        console.log(a); // Apple
        console.log(rest); // ['Banana', 'Orange']
    }
    // 3. Default values
    {
        const fruits = ['Apple', 'Banana'];
        const [a = "asd", b, c = 'Orange'] = fruits;
        console.log(a); // Apple
        console.log(b); // Banana
        console.log(c); // Orange
    }
    // 4. Nullish coalescing operator
    {
        const name = null;
        const userName = name ?? 'Guest';
        console.log(userName); // Guest


        const obj = { a: 1, b: 2 };
        const { a, b, c } = obj;
    }

    {
        const person = {
            name: 'John',
            age: 17,
            address: {
                city: 'New York',
                country: 'USA'
            }
        }

        const {name, age, address: {city, country}} = person;
        console.log(name); // John
        console.log(age); // 17
        console.log(city); // New York
        console.log(country); // USA
        console.log(address); // ReferenceError: address is not defined
    }

    // cw: Exercise 1
    /*Rewrite the code below to use array destructuring instead of assigning each value to a constiable.*/
    {
        const item = ["Egg", 0.25, 12];

        const name = item[0];
        const price = item[1];
        const quantity = item[2];

        console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
    }
    // Exercise 2:
    // Rewrite the code below to assign each number to the right constiable.
    {
        let numbers = [3, 5, 4, 2, 6, 1];
        let [one, two, three, four, five, six] = numbers;
        console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
    }
    // Exercise 3
    // We have an object called 'user'.
    // Write the destructuring assignment that reads:
    // - 'name' property into the variable 'name'.
    // - 'years' property into the variable 'age'.
    // - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
    {
        let user = { name: "John", years: 30 };
        let { } = user;

        console.log(name); // John
        console.log(age); // 30
        console.log(isAdmin); // false
        console.log();
    }
    {
        let numbers = [10, 20, 30];
        [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
        console.log(numbers) //?
    }
}
)();