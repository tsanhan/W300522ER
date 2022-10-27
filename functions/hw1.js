function capitalize(word) {
    const firstLatter = word.charAt(0);
    const firstLatterCapitalized = firstLatter.toUpperCase();
    return firstLatterCapitalized + word.substring(1)
}
// pollution of the global scope
// var a = "asd"

function capitalizeWords(words) {
    const wordsSplit = words.split(' ');
    console.log(wordsSplit);
    let result = '';
    for (let i = 0; i < wordsSplit.length; i++) {
        // DRY: Don't Repeat Yourself
        
        result += capitalize(wordsSplit[i]) + ' ';
    }
    // let a = "asd";
    // {
    //     let a = "asd"; // ✅
    // }
    // let a = "asd"; // ❌
    
    // const filtered = ["1",2,"4",5,6,7,7].filter(function (x) {
    //     return typeof x === "number";
    // })
    // return result;
}

console.log(capitalize('hello'));
console.log(capitalizeWords('this is the greatest class in hackerU'));

function isEven(num) {
    return num % 2 === 0;      
}

function factorial(num) { // !5 = 5 * 4 * 3 * 2 * 1
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}