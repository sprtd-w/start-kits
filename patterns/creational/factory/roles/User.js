var Person = require('./Person');

class User extends Person {
    constructor(name) {
        super(name);        
    }
}

module.exports = User;
