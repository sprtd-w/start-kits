var Person = require('../roles/Person');
class RoleBuilder {
    constructor(name) {
        this.name = name;
    }

    createUser() {
        this.role = 'user';

        return this;
    }

    createDeveloper(softWareList = []) {
        this.role = 'developer';
        this.isDeveloper = true;        

        return this;
    }

    setSoftwareList(softWareList = []) {
        this.softWareList = softWareList;

        return this;
    }

    build() {
        return new Person(this);
    }    
}

module.exports = RoleBuilder;
