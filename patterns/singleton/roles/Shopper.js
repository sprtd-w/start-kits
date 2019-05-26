var Logger = require('../helpers/Logger');
var logger = new Logger();

class Shopper {
    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`Shopper.js -> new shopper: ${name}, $${money}`);
    }
}

module.exports = Shopper;
