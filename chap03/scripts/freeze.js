'use strict';

const pet = { type: 'スノーホワイト', name: 'キラ'};

// Object.preventExtensions(pet);
// Object.seal(pet);
Object.freeze(pet);

// プロパティの変更
pet.name = '山田キララ';

// プロパティの削除
delete pet.type;

// プロパティの追加
pet.wegiht = 42;
