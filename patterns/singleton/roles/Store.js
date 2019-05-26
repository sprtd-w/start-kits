var Logger = require('../helpers/Logger');
var logger = new Logger();

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`Store.js -> new store: ${name}, inventory: ${inventory}`);        
    }
}

module.exports = Store;
