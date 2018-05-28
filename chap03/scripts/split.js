const p = /[\/.\-]/gi;

console.log('2017-02-12'.split(p));
console.log('2017/02/12'.split(p));
console.log('2017.02.12'.split(p));

