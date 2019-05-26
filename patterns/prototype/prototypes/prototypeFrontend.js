var Developer = require('../roles/Developer');

var prototypeFrontend = new Developer();

prototypeFrontend.addSkilltoDescription('JS');
prototypeFrontend.addSkilltoDescription('HTML');
prototypeFrontend.addSkilltoDescription('CSS');

module.exports = prototypeFrontend;
