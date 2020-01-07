class Group {
    constructor(description, group = []) {
        this.description = description;
        this.group = group;
    }

    get total() {
        return this.group.reduce((total, item) => total + item.total, 0);
    }

    print() {
        console.log(`GROUP: ${this.description}`);
        this.group.forEach(item => item.print());
    }
}

module.exports = Group;