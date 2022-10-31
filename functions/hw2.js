(function (window, document) {
    // 2.
    const array = [11, 15, 6, 8, 9, 10]
    const oddSum = (array) => {
        const rtn = [];
        for (let index = 0; index < (array.length -1); index++) {
            const addition = array[index] + array[index + 1];
            const remainder = addition % 2; // 0 for even or 1 for odd
            rtn.push(!remainder);
        }
        return rtn;
    }

    console.log(oddSum(array));

    //4.
    
    const sciiCapitalize = (string) => {
        let rtn = "";
        for (let index = 0; index < string.length; index++) {
            rtn += !(string.charCodeAt(index) % 2) ? string.charAt(index).toUpperCase() : string.charAt(index).toLowerCase();
        }
        return rtn;
    }
    
    sciiCapitalize("the quick brown fox");

    //6.
    const add_suffix = suffix => word => word + suffix
    
    const add_ly = add_suffix("ly");
    console.log(add_ly("hopeless")); // hopelessly


})(window, document);