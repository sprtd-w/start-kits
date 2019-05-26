class Person {
    constructor({
        name = 'unknown',
        role = '',
        isDeveloper = false,
        softWareList = []
    }) {
        this.name = name;
        this.role = role;
        this.isDeveloper = isDeveloper;
        this.softWareList = softWareList;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;
