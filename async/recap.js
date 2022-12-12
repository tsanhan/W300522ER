(function () {
    const longBtn = document.querySelector("#long-operation");
    const uiBtn = document.querySelector("#show-ui-or-console");
    const listElem = document.querySelector("#list");

    uiBtn.addEventListener("click", () => {
        listElem.classList.toggle("d-none");
    });

    longBtn.addEventListener("click", () => {
        setTimeout(() => {
            console.log(`done with long operation`);  
        }, 0);
        const start = Date.now(); // epoch time in milliseconds

        for (let i = 0; i < 2e9; i++) {
            // do nothing
        }
        const end = Date.now();
        console.log(`Time taken: ${end - start}ms`);
    });

   
})();