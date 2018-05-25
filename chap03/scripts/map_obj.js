const m = new Map();

m.set({}, 'hoge');
console.log(m.get({}));

const n = new Map();
const key = {};

m.set(key, n);
console.log(m.get(key));