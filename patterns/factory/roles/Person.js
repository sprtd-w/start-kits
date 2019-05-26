class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;
