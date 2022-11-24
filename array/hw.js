
(function () {

    function min(arr) {
        if (arr.length === 1) return arr[0]
        let min = arr[0];
        for (let m of arr) {
            const isNumM = typeof m == 'number';
            const isNumMin = typeof min == 'number';
            if (isNumM && isNumMin) min = m <= min ? m : min;
            if (!isNumM && isNumMin) min = m[0] <= min ? m : min;
            if (isNumM && !isNumMin) min = m <= min[0] ? m : min;
            if (!isNumM && !isNumMin) min = m[0] <= min[0] ? m : min;
        }
        return min;
    }

    function sort(arr) {
        
        let rtn = [];
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            let minVal = min(arr);
            rtn.push(minVal);
            let index = arr.indexOf(minVal);
            arr.splice(index, 1);

        }

        return rtn;
    }
    const arr = [[3], 4, [2], [5], 1, 6];
    arr.sort((a, b) => a - b);
    console.log(arr);
    const print = sort(arr)
    console.log(print);
})();