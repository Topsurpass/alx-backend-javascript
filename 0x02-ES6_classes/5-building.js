/**
 * An abstract class that other classes extend from
 */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    /**
     * if another class extends from this and does not
     * have this function / method, throw and error.
     */
    if (this.constructor !== Building) {
      if (typeof (this.evacuationWarningMessage) !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
