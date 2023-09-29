/**
 * A class that verify the type of attributes during object creation
 */
export default class HolbertonCourse {
  /**
   * Create and initialize new object
   * @param {String} name
   * @param {Number} length
   * @param {String[]} students
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(arr) {
    if (!(Array.isArray(arr))) {
      throw new TypeError('Student must be an array of string');
    }
    if (arr.every((elem) => typeof (elem) !== 'string')) {
      throw new TypeError('Student must be an array of string');
    }
    this._students = arr;
  }
}
