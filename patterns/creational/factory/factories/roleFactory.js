var User = require('../roles/User');
var Developer = require('../roles/Developer');

var roleFactory = (name, isDeveloper = false, softWareList) => {
    if (isDeveloper) {
        return new Developer(name, softWareList);
    }

    return new User(name);

}

module.exports = roleFactory;