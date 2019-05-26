var Person = require('./Person');

class Developer extends Person {
    constructor(name, softWareList = []) {
        super(name);
        this.softWareList = softWareList;
        this.isDeveloper = true;
    }
}

module.exports = Developer;
