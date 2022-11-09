(function (window, document) {
    let result = '<table border="1">';
    for (let i = 1; i <= 10; i++) { // 100 rows
        result += '<tr>';
        for (let j = 1; j <= 10; j++) { // 100 columns
            result += `<td>${i * j}</td>`;
        }
        result += '</tr>';
    }
    result += "</table>";
    document.querySelector("#loach-hakefel").innerHTML = result;

    const lightSebares = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'white', 'gray'];
    let resultLis = '<ul>';
    
    for (const color of lightSebares) {
        resultLis += `<li style="color: ${color}">${color}</li>`;
    }

    resultLis += '</ul>';
    document.querySelector("#lightSabers").innerHTML = resultLis;

    const r = document.querySelector("#r").value;
    let rgb = `rgb(${r}, 0, 0)`;
    document.querySelector('#colorDiv').innerHTML = `<div style="width: 50vw; height: 100px; background-color: rgb(123, 345, 4)"></div>`
})(window, document);
