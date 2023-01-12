(function (window, document) {
    const green = document.querySelector("#green-div");
    const blue = document.querySelector("#blue-div");
    const red = document.querySelector("#red-div");
    const clickBtn = document.querySelector("#clickBtn-div");

    const handler = $event => {
        console.log(`target: ${$event.target.id}, currentTarget: ${$event.currentTarget.id}`);
    }

    // ** make the handler run on capturing **
    // let options = {
    //     capture: true // default is false, which means bubbling. if true, it means capturing.
    // }
    // clickBtn.addEventListener("click", handler, options);
    // red.addEventListener("click", handler,options);
    // green.addEventListener("click", handler,options);
    // blue.addEventListener("click", handler, options);

    clickBtn.addEventListener("click", handler);
    red.addEventListener("click", handler);
    green.addEventListener("click", handler);
    blue.addEventListener("click", handler);

    setTimeout(() => {
        blue.removeEventListener("click", handler);
    }, 5000);

})(window, document);