const { writeFile, existsSync, readFileSync, unlink } = require('fs');

const FILE_NAME = 'localStorage.json';
class LocalStorage {
    constructor() {        
        if (existsSync(FILE_NAME)) {
            this.items = JSON.parse(
                readFileSync(FILE_NAME)
            );        
        } else {
            this.items = {};
        }        
    }

    get length() {
        return Object.keys(this.items).length;        
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile(
            FILE_NAME,
            JSON.stringify(this.items),
            error => {
                error && console.log(error);
            }
        );
    }

    clear() {
        this.items = {};
        unlink(FILE_NAME, () => {
            console.log('cleared storage');
        });
    }
}

const LocalStorageInstance = new LocalStorage();
module.exports = LocalStorageInstance;
