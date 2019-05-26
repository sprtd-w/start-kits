var Logger = require('./helpers/Logger');
var Shopper = require('./roles/Shopper');
var Store = require('./roles/Store');

var logger = new Logger().getInstance();
console.log(logger);

logger.log('app: started');

var alex = new Shopper('alex', 500);
var shop = new Store('shop#1', [
    {
        item: 'item1',
        quantity: 5,
        price: 750
    },
    {
        item: 'item2',
        quantity: 20,
        price: 5
    }
]);

logger.log('app: finished');
console.log('total app logs: ', logger.count);

logger.logs.map(log => console.log(`   ${log.message}`));
