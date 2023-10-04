/**
 * A class that contains a symbol that Customize the string representation of an
 * object when it is converted to a string
 */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
 * Customize the string representation of an object when it is converted to a string
 * exp: Object.toString() // [object this._code] instead of [object Object]
 */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
