(function () {
    // associative array - object (key, value)
    // object literal
    const person = {
        hobbies: ['reading', 'writing', 'coding'],
    };
    person.name = 'Vic';
    person['age'] = 30;

    person['birth day'] = "12/12/1988"; // ❌ bad practice - use camelCase
    person.birthDay = "12/12/1988"; // ✅ good practice - use camelCase
    // person[age] = 31; // error

    console.log(person.birthDay);

    person.hobbies = ['football', 'basketball', 'tennis'];

    const posts = [
        {
            title: 'Post 1',
            body: 'Post 1 body',
            comments: ["comment 1", "comment 2"],
        },
        {
            title: 'Post 2',
            body: 'Post 2 body',
            comments: ["comment 1", "comment 2"],
        },
        {
            title: 'Post 3',
            body: 'Post 3 body',
            comments: ["comment 1", "comment 2"],
        }
    ];

    console.log(posts[0].comments[0]); // comment 1

    // ex1:
    // const someObject = {};

    /** 
      someObject._name = "hello"
      
      someObject.age = 6 
      
      const propName = "name"; // "name"
      
      someObject[propName] = "hello"; // someObject.name = "hello";
      
      someObject.123 = true; // error
    */


    // ex2: 
    const someObject = {
        friends: [
            { name: "Vic" },
            { name: "John" },
            { name: "Jane" },
        ],
        color: "red",
        isEvil: true,
    };

    //someObject.friends[1].name

    // hw: create a simple db (array) of objects (movie)
    // each movie should have: title (string), rating (number), hasWatched (boolean)
    // print out the movies using forEach
    // output: 
    // you have watched "In Bruges" - 5 stars
    // you have not seen "Frozen" - 4.5 stars
    // you have watched "Mad Max Fury Road" - 5 stars
    // you have not seen "Les Miserables" - 3.5 stars

    // USE YOUR OWN MOVIES


    // Set
    const id = document.querySelector('#id');
    id.classList.add('red');

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8, 9, 10, 3, 4, 5];
    const set = new Set();

    set.add('red');

    set.add('blue');

    set.add('green');
    set.add({ name: 'Vic' });

    console.log(set);

    set.forEach((color, color2) => {
        console.log(color, color2);
    });


    console.log("has red:", set.has('red'));

    console.log("keys:", set.keys());

    console.log("values:", set.values());

    console.log("entries:", set.entries());


    // class ex:
    // exclude any duplications from an array
    const s = new Set(arr);
    let rtnArr = Array.from(s);

    // spread operator - ES6
    rtnArr = [...s];
    console.log(rtnArr);


    const func = (...data) => {
        console.log(data);
    }

    func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


    const func2 = (a, b) => {
        console.log(a, b);
    }

    func2(...[1, 2]); // func2(1, 2);

    const personFactory = (name, age, ...hobbies) => {
        return {
            name,
            age,
            hobbies
        };
    };

    const p = personFactory('Vic', 30, 'reading', 'writing', 'coding');
    console.log(p);


    // Map
    const map = new Map();
    map.set('name', 'Vic');
    map.set('age', 30);
    map.set('age', 37);
    map.set('hobbies', ['reading', 'writing', 'coding']);

    console.log(map);

    console.log("has red:", map.has('red'));

    console.log("keys:", map.keys());

    console.log("values:", map.values());

    console.log("entries:", map.entries());

    /* class (sets and maps):
    1.
    Return Sole Element in a Set:
    
    Given a set containing an element, return the sole element.
    Examples:
    const first = new Set();
    first.add(1); 
    elementSet(first) ➞ 1

    const second = new Set();
    second.add("apple"); 
    elementSet(second) ➞ "apple"

    const third  = new Set();
    third.add(false); 
    elementSet(third) ➞ false

    2.
    What does the following code return?
    new Set([1,1,2,2,3,4]) 

    3.
    What does the following code return?
    [...new Set("referee")].join("")

    4.
    What does the Map m look like after running the following code?
    let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);

    5.
    hasDuplicate
    Write a function called hasDuplicate which accepts an array 
    and returns true or false if that array contains a duplicate
    hasDuplicate([1,3,2,1]) // true
    hasDuplicate([1,5,-1,4]) // false

    6. (hard) - maybe for HW
    vowelCount
    Write a function called vowelCount which accepts a 
    string and returns a map where the keys are numbers 
    and the values are the count of the vowels in the string.

    vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
    vowelCount('Colt') // Map { 'o' => 1 }
    
    */
    const printHi = () => {
        console.log('hi');
    }

    const jedi = {
        name: 'Vic',
        age: 30,
        isJedi: true,
        'birth day': '12/12/1988',
        strike: function () {
            console.log('vvv sh sh sh...');
        }
    }

    const cat = {
        name: 'Mimi',
        age: 2,
        isJedi: false,
        speak: function () {
            console.log('meow');
        }
    }

    const dog = {
        name: 'Rex',
        age: 3,
        isJedi: false,
        speak: function () {
            console.log('woof');
        },
        // twice the same method: name space collision
        // => the last one wins
        speak: () => {
            console.log('woof2');
        }
    }

    const crazyDog = {
        ...dog,
        speak: () => {
            console.log('crazy woof');
        },
        myName: function () {
            console.log(this.name);
        }
    }

    cat.speak();
    dog.speak();
    crazyDog.speak();
    crazyDog.myName();

    jedi.strike();


    
    // JSON: JavaScript Object Notation
    console.log(ObiWan);

    const oo = [{
        name: 'ObiWan',
        age: 30,
        isJedi: true,
        myName: function () {
            console.log(this.name);
        }
    }];

    // 1. "": must be double quotes
    const oo1 = {
        "name": 'ObiWan',
        "age": 30,
        "isJedi": true,
        "myName": function () {
            console.log(this.name);
        }
    }

    console.log(oo1);

    // 2. no functions: only properties
    const oo2 = {
        "name": "ObiWan",
        "age": 30,
        "isJedi": true
    }

    const ooStringify = JSON.stringify(oo);
    console.log("ooStringify:", ooStringify);


    const ooParse = JSON.parse(ooStringify);
    console.log("ooParse:", ooParse);

    document.querySelector('#save').addEventListener('click', () => {
        const firstNameBox = document.getElementById("firstNameBox");
        const lastNameBox = document.getElementById("lastNameBox");
        const cityBox = document.getElementById("cityBox");

        const user = {
            firstName: firstNameBox.value,
            lastName: lastNameBox.value,
            city: cityBox.value
        };

        localStorage.setItem("userDetails", JSON.stringify(user));

    });

    document.querySelector('#load').addEventListener('click', () => {
        const firstNameBox = document.getElementById("firstNameBox");
        const lastNameBox = document.getElementById("lastNameBox");
        const cityBox = document.getElementById("cityBox");

        const str = localStorage.getItem("userDetails");

        const user = JSON.parse(str);

        firstNameBox.value = user.firstName;
        lastNameBox.value = user.lastName;
        cityBox.value = user.city;
    });


})();