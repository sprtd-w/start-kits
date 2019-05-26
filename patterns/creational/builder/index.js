var RoleBuilder = require('./builders/roleBuilder');

var user1 = new RoleBuilder('user1').createUser().build();
var developer1 = new RoleBuilder('developer1')
                        .createDeveloper()
                        .setSoftwareList(['JS', 'NodeJS'])
                        .build();

console.log(user1.toString());
console.log(developer1.toString());
