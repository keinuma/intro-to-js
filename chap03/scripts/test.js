const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
const str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
const str2 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく';

console.log(p.test(str1));
console.log(p.test(str2));

console.log(str1.search(p));
console.log(str2.search(p));