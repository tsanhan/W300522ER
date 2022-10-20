// simple function

function callTheForce(forceElement) {
    var emoji = '';
    
    switch (forceElement) {
        case 'lightning':
            emoji = '⚡';
            break;

        case 'fire':
            emoji = '🔥';
            break;

        case 'telekinesis':
        case 'mind control':
        case 'mind reading':
        case 'telepathy':
            emoji = '🧠';
            break;
            
        case 'jump':
        case 'speed':
        case 'strength':
            emoji = '💪';
            break;
    }

    // if (forceElement === 'lightning') {
        
    // }

    // else if (forceElement === 'fire') {
    //     emoji = '🔥';
    // }

    // else if (forceElement === 'telekinesis' ||
    //     forceElement === 'mind control' ||
    //     forceElement === 'mind reading' ||
    //     forceElement === 'telepathy') {
    //     emoji = '🧠';
    // }

    // else if (
    //     forceElement === 'jump' ||
    //     forceElement === 'speed' ||
    //     forceElement === 'strength') {
    //     emoji = '💪';
    // }

    document.write(`You called the ${emoji} power`);
}

const theQuestion = "What power do you want to call?";

// prompt the user for input and store it in a variable
const power = prompt(theQuestion, 'lightning');

callTheForce(power);



// hoisting
throwLSJedi();

function throwLSJedi() {
    console.log('WWSHWWSSSHHHH');
}

// ex1: fix the code:
throwLSSith();
var throwLSSith = function() {
    console.log('WWSHWWSSSHHHH back at you');
}

throwLSSSith();
let throwLSSSith = function() {
    console.log('WWSHWWSSSHHHH #$@# u Jedi!');
}

throwLSTSith();
const throwLSTSith = function() {
    console.log('WWSHWWSSSHHHH #$@# u Jedi!');
}
