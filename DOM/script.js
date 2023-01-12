(() => {
    const colorLis = () => {
        const li = document.querySelector("ol > li:nth-child(1)");
        console.log(li);

        // 1. get and print the h1 element
        const h1 = document.querySelector("h1");
        console.log("h1", h1);

        // 2. get and print all the even li elements
        const evenLi = document.querySelectorAll("ol > li:nth-child(even)");
        evenLi.forEach((li) => li.style.color = "blue");

        // 3. get the h1 element and print it's 'innerText'
        console.log("h1.innerText", h1.innerText);

        // 4. color all the li elements with the color that is in innerText
        const lis = document.querySelectorAll("ol > li");
        lis.forEach((li) => li.style.color = li.innerText);
    }

    const btn = document.querySelector("#btn");
    btn.addEventListener("click", colorLis);

    const inputText = document.querySelector("#inputText");
    inputText.addEventListener("keyup", $event => {
        console.log($event.target.value);
    });
    
    
    

})();