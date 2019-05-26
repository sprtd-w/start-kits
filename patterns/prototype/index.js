var prototypeFrontend = require('./prototypes/prototypeFrontend');

var developer1 = prototypeFrontend.clone();
developer1.name = 'Developer 1';
developer1.addSkilltoDescription('Angular 2+');

var developer2 = prototypeFrontend.clone();
developer2.name = 'Developer 2';
developer2.addSkilltoDescription('React JS');

console.log(`${developer1.name } skills: ${developer1.getSkillsDescription()}`);
console.log(`${developer2.name } skills: ${developer2.getSkillsDescription()}`);