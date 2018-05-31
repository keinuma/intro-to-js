class MyIterator {
    // 引数経由うで渡された配列をdataプロパティの設定
    constructor(data) {
        this.data = data;
    }

    // デフォルトイテレータを取得するためのメソッドを定義
    [Symbol.iterator]() {
        let current = 0;
        let that = this;
        return {
            // dataプロパティの次の要素を取得
            next() {
                return current < that.data.length ?
                    {value: that.data[current++], done: false} :
                    {done: true};
            }
        };
    }
}


// MyIteratorで保存された配列を列挙
let itr = new MyIterator(['one', 'two', 'three']);
for (let value of itr) {
    console.log(value);
}
