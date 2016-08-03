/**
 * Datepicker
 */
import $ from 'jquery'
import { UIHelper } from '../../tool/uihelper.js'
'use strict';

/**
 * Datepicker component
 *
 * @export
 * @class Datepicker
 * @extends {Component}
 */
export default class Datepicker {
  constructor($element, $scope) {
    'ngInject'
    let ID = function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    this.id = ID();
    const DEFAULTS = {
      showWeeks: false,
      formatDayTitle: 'yyyy MMMM',
      initDate: new Date()
    };
    let dateOptions = Object.assign({}, DEFAULTS, this.datepickerOptions);
    let timeOptions = {};
    timeOptions.max = dateOptions.maxDate;
    timeOptions.min = dateOptions.minDate;
    timeOptions.minuteStep = dateOptions.minuteStep ? dateOptions.minuteStep : 1;
    delete dateOptions.minuteStep;
    timeOptions.secondStep = dateOptions.secondStep ? dateOptions.secondStep : 1;
    timeOptions.showSeconds = dateOptions.hasOwnProperty('showSeconds') ? dateOptions.showSeconds : true;
    this.viewFormat = dateOptions.viewFormat;
    delete dateOptions.viewFormat;
    this.modelFormat = dateOptions.modelFormat;
    delete dateOptions.modelFormat;

    this.dateOptions = dateOptions;
    this.timeOptions = timeOptions;

    let closeEvent = UIHelper.listen(window, 'click', (e) => {
      console.info("$($element).has(e.target).length", $($element).has(e.target).length);
      console.info("$(e.target).parents('.dropdown').length", !$(e.target).parents('.dropdown').length);

      /**
       * 点击的元素父元素找不到$element，说明在$element之外，则应关闭dropdown
       * 当一个页面有多个dropdown时：
       * 决定打开状态时要借助$element来决定是否为当前的那个dropdown
       */
      if ($(e.target).has('.dropdown').length) {
        this.isOpen = false;

        if ($($element).has(e.target).length) {
          this.isOpen = true
        }
      }
      $scope.$digest();

    });

    $scope.$on('$destroy', () => closeEvent.remove());
  }

  showPop(e) {
    this.isOpen = true;
  }
}
