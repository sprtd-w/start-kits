const LocalStorageInstance = require('./localStorage');
let localStorage; // if bundle would be both for window and nodejs

let storageObject = localStorage || LocalStorageInstance;

console.log(`storage object: ${storageObject.length}`);

const test = storageObject.getItem('testKey');

if (test) {
    console.log(`testKey=${test}`);
    storageObject.clear();
} else {
    storageObject.setItem('testKey', 'testValue');
}