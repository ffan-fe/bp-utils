/**
 * Datepicker component define
 */

import template from './template.html';
import controller from './controller.js';
import './style.less';

let datepickerComponent = {
  restrict: 'E',
  bindings: {
    ngModel: '=',
    datepickerOptions: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default datepickerComponent;
