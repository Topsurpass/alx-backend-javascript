/**
 * A class that validates and does conversion rate
 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (val instanceof (Currency)) {
      this._currency = val;
    }
    throw new TypeError('currency must be a string');
  }

  /**
     * A function that displays the result in a formated way
     * @returns formatted text
     */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
     * A function that does conversion
     * @param {Number} amount
     * @param {Number} conversionRate
     * @returns amount * conversionRate
     */
  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number' && typeof (conversionRate) !== 'number') {
      throw new TypeError('amount and conversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}
