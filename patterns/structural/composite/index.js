const Item = require('./items/item');
const Group = require('./items/group');

const item1 = new Item({ name: 'item1', price: 3.99 });
const item2 = new Item({ name: 'item2', price: 13.20 });
const item3 = new Item({ name: 'item3', price: 32.05 });
const item4 = new Item({ name: 'item4', price: 12.35 });

const group1 = new Group('Group1', [item1, item3]);
const group2 = new Group('Group2', [item2]);

const allGroups = new Group('ALL: ', [item4, group1, group2]);

console.log(`all groups total: ${allGroups.total}`);
allGroups.print();
