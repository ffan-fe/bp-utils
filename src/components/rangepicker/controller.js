/**
 * Rangepicker
 */

'use strict';

/**
 * Rangepicker component
 *
 * @export
 * @class Rangepicker
 * @extends {Component}
 */
export default class Rangepicker {
  constructor() {
    let endTimeOptions = angular.copy(this.rangepickerOptions);
    this.endTimeOptions = endTimeOptions;
  }
}
