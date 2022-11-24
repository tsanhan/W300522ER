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



})();