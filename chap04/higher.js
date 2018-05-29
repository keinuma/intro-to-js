let arrayWalk = (data, f) => {
    for (let key in data) {
        f(data[key], key);
    }
};

let showElement = (value, key) => {
    console.log(key + ':' + value);
};


const ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);
