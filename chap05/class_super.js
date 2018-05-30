class Member {
    // コンストラクター
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // firstNameプロパティ
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    // lastNameプロパティ
    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    getName() {
        return this.lastName + this.firstName;
    }
}


class BusinessMember extends Member {
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }

    work() {
        return this.getName() + 'は働いています';
    }

    getName() {
        return super.getName() + '/役職: ' + this.clazz;
    }
}


let bm = new BusinessMember('三郎', '佐藤', '部長');
console.log(bm.getName());
