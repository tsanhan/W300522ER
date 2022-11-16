(function(window, document) {

    // 1. select the element
    const btnNum = document.querySelector("#btnNum");

    // 2. add the event listener
    btnNum.addEventListener("click", $event => {
        // 3. manipulate the DOM
        let num = +btnNum.innerText;
        num++;
        btnNum.innerText = num;
    });


    // 1. select the element
    const trs = document.querySelectorAll("table#calc-table tr");
    trs.forEach(tr => {
        const tds = tr.querySelectorAll("td");
        
        const tdsArr = Array.from(tds);
        const sum = tdsArr.reduce((acc, td) => acc + (parseInt(td.innerText) || 0), 0);

        // tds[tds.length - 1].innerText = `<strong>${sum}</strong>`;
        tds[tds.length - 1].innerHTML = `<strong>${sum}</strong>`;
    });

    


    
})(window, document);