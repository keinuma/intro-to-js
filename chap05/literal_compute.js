let i = 0;
let member = {
    name: '山田太郎',
    birth: new Date(2017, 5, 13),
    ['memo' + ++i]: '正規会員',
    ['memo' + ++i]: '支部会長',
    ['memo' + ++i]: '関東'
};

console.log(member);