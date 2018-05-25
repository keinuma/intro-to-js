const data = [4, 9, 16, 25];
const result = data.some(function (value) {
	return value % 3 === 0;
});

console.log(result);

if (result) {
	console.log(('3の倍数が見つかりました。'));
} else {
	console.log('3の倍数が見つかりませんでした。');
}