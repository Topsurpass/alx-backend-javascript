/**
 * A class with functions that changes to number and string resptively
 * when the values supplied to the object are casted
 */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
     *
     * @returns size when value is casted to number
     */
  valueOf() {
    return this._size;
  }

  /**
     *
     * @returns location when value is casted to string
     */
  toString() {
    return this._location;
  }
}
