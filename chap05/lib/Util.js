const AUTHOR = 'YAMADA, Yishohiro';

export class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.lastName + this.firstName;
    }
}


export class Area {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    getArea(c=1) {
        return c * this.base * this.height / 2;
    }
}