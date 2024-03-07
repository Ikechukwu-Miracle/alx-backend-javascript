export default class Currency {
    constructor(code, name) {
        if (typeof code !== 'string') {
            throw TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
            throw TypeError('Code must be a string');
        }
        
        this._code = code;
        this._name = name;
    }

    get code() {
        return this._code;
    }

    set code(val) {
        this._code = val;
    }
    
    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}