// IIFE - Immediately Invoked Function Expression 
(() => {
    document.querySelector('body').style.backgroundColor = 'red';


    const declarVar = () => {
        var x = 10;
    }
    declarVar();

    const getDataFromUser = function () {
        const data = prompt('Enter your name');
        console.log(data);
        console.log(x);
    }


    getDataFromUser()

    const cb = master => `Welcome, ${master}`;

    // arrow function
    const welcomeMasters = ["yoda", "obi-one kanoby", "darth sidious", "darth vader", "darth maul", "darth tyranus", "darth plagueis", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus", "darth nihilus", "darth traya", "darth vitiate", "darth krayt", "darth sidious", "darth maul", "darth bane", "darth revan", "darth malgus"]
    // the arrow
    var welcome = welcomeMasters.map((master) => {
        return `Welcome, ${master}`;
    });
    // if there is only one argument, no need for parenthesis
    var welcome = welcomeMasters.map(master => {
        return `Welcome, ${master}`;
    });
    // if there is no argument, ne need only parenthesis
    var welcome = welcomeMasters.map(() => {
        return `Welcome, ${master}`;
    });
    // if there is only one line of code, no need for curly braces
    var welcome = welcomeMasters.map(cb);

    welcome.forEach(console.log)

})();
