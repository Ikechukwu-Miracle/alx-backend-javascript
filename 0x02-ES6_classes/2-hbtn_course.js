export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw TypeError('Length must be a Number');
        }
        if (!Array.isArray(students)) {
            throw TypeError('Students must be an Array');
        }
        if (students.some((student) => typeof student !== 'string')) {
            throw TypeError('Students must be an Array of strings');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }
    get name() {
        return this._name;
    }
    
    set name(val) {
        if (typeof val !== 'string') {
        throw TypeError('Name must be a string');
        }
        this._name = val;
    }
    
    get length() {
        return this._length;
    }
    
    set length(val) {
        if (typeof val !== 'number') {
        throw TypeError('Length must be a Number');
        }
        this._length = val;
    }
    
    get students() {
        return this._students;
    }
    
    set students(val) {
        if (!Array.isArray(val)) {
        throw TypeError('Students must be an Array');
        }
        if (val.some((student) => typeof student !== 'string')) {
        throw TypeError('Students must be an Array of strings');
        }
        this._students = val;
    }
}