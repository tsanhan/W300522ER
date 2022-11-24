(function () {

    const rand = Math.random(); // [0 - 1) (won't include 1) [decimal]
    document.write(`Random number: ${rand}<br>`);

    const rand2 = rand * 6; // [0 - 6) (won't include 6) [decimal]
    document.write(`Random 2 number: ${rand2}<br>`);

    const rand3 = Math.floor(rand2); // [0 - 5] (will include 5) [integer]   
    document.write(`Random 3 number: ${rand3}<br>`);

    const rand4 = rand3 + 1; // [1 - 6] (will include 6) [integer]
    document.write(`Random 4 number: ${rand4}<br>`);

    // rand from 3000 to 5000
    //|--------3000-5000---------------------|
    //|-----------0-2000------------|
    //         |--0-2000.9999..-----|
    //         |--0-1-------|
    Math.floor((Math.random() * 2001)) + 3000;
    document.write(`Random 4 number: ${rand4}<br>`);


    // class exercises:
    // 0 - 1 (decimal)
    // 0 - 100 (int)
    // 0 - 200 (int)
    // 50 - 250 (int)
    // 70 - 90 (int)
    // print 100 random numbers between 30 - 40 (int) 

    // create an array of a random size (between 10-15) random numbers between 30 - 40 (int)
    // - calculate average of the numbers in the array
    const arraySize = Math.floor(Math.random() * 6) + 10;
    const array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push((Math.random() * 11) + 30);
    }
    console.log("average: ", array.reduce((a, b) => a + b) / array.length);

    // - Law of large numbers


    Math.random(); // [0 - 1) (won't include 1) [decimal]
})();