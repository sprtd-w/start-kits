var logger = require('../helpers/Logger');

class Shopper {
    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`Shopper.js -> new shopper: ${name}, $${money}`);
    }
}

module.exports = Shopper;
