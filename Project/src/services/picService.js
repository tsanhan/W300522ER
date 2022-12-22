export const setCounter = (array, counter, controller = "") => {
    let newCounter;
    if (controller === "next") {
        newCounter = counter < array.length - 1 ? counter + 1 : 0;
        return newCounter;
    }

    if (controller === "prev") {
        newCounter = counter > 0 ? counter - 1 : array.length - 1;
        return newCounter;
    }
    
    return 0;
}