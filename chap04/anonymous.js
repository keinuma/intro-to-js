let arrayWork = (data, f) => {
    for (let key in data) {
        f(data[key], key);
    }
};

const ary = [1, 2, 4, 8, 16];
arrayWork(
    ary,
    function (value, key) {
        console.log(key + ':' + value);
    }
);