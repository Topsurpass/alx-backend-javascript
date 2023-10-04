/**
 * A class that uses getter and setter to validate user input
 * before object creation
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = val;
  }

  /** *
   * Printout the name and cpde in this format
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
