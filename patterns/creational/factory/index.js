var roleFactory = require('./factories/roleFactory');

var user1 = roleFactory('user1');
var developer1 = roleFactory('developer1', true, ['JS']);

console.log(user1.toString());
console.log(developer1.toString());
