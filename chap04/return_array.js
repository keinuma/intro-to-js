let getMinMax = (...nums) => {
    return [Math.max(...nums), Math.min(...nums)];
};


let result = getMinMax(10, 35, -5, 78, 0);
console.log(result);

let [max, min] = getMinMax(10, 35, -5, 78, 0);
console.log(max);
console.log(min);