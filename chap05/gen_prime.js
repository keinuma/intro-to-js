// 引数valueが素数かどうか判定
let isPrime = (value) => {
    let prime = true;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return prime
};


// 素数を求めるジェネレータ
function* genPrime() {
    let num = 2;
    // 2から順に素数判定し、素数の場合だけyield
    while (true) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }

}


for (let value of genPrime()) {
    if (value > 100) { break; }
    console.log(value);
}