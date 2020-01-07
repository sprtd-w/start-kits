class Item {
    constructor(item) {
        this.item = item;
    }

    get total() {
        return this.item.price || 0;
    }

    print() {
        console.log(`   item: ${this.item.name || ''}`);
    }
}

module.exports = Item;
