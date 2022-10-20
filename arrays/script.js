// simple function
function callTheForce(power) {
    if (power === 'lightning') {
        document.write(`You called the ⚡ power`);
    }
    
    if (power === 'fire') {
        document.write(`You called the 🔥 power`);
    }

    if (power === 'telekinesis' || 
        power === 'mind control' || 
        power === 'mind reading' ||
        power === 'telepathy') {
        document.write(`You called the 🧠 power`);
    }

    if (power === 'jump' ||
        power === 'speed' ||
        power === 'strength') {
        document.write(`You called the 🦾 power`);
    }
} 

// get the power from the user
// based on the power, print a message with the following emojis:
// lightning - ⚡
// fire - 🔥
// telekinesis - 🧠
// mind control - 🧠
// mind reading - 🧠
// telepathy - 🧠
// jump - 🦾
// speed - 🦾
// strength - 🦾

const power = prompt(`What power do you want to call?`);

callTheForce(power);

