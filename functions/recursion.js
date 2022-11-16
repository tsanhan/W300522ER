(function () {
    // LIFO - Last In First Out
    const array = [11, 15, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

    const recursiveSum = (array, index = 0, acc = 0) => {
        // stop condition - the condition that will stop the recursion (the creation of more function calls)
        if (index === array.length) {
            return acc;
        }
        const rtn = recursiveSum(array, index + 1, acc + array[index]);
        return rtn;
    }
    console.log(recursiveSum(array));


    // 0. write a function like recursiveSum but summarize only the values every N'th position
    const recursiveSumWithJump = (jump, array, index = 0, acc = 0) => {
        // stop condition - the condition that will stop the recursion (the creation of more function calls)
        index += index === 0 ? jump - 1 : jump; // ternary operator

        if (index >= array.length) {
            return acc;
        }
        const rtn = recursiveSumWithJump(jump, array, index, acc + array[index]);
        return rtn;
    }
    console.log(recursiveSumWithJump(5, array));

    // 1. Recursion: Length of a String
    // Write a function that returns the length of a string. Make your function recursive.
    
})();

