class Developer {
    constructor(name = 'unknown') {
        this.name = name;
        this._skillDescription = [];
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    getSkillsDescription() {
        return this._skillDescription.join(', ');
    }

    addSkilltoDescription(skill) {
        this._skillDescription.push(skill);
    }

    clone() {
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        cloned._name = this._name;
        cloned._skillDescription = [...this._skillDescription];

        return cloned;
    }
}

module.exports = Developer;
