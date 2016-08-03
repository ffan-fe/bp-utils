import template from './template.html';
import controller from './controller.js';
import './style.less';

let formComponent = {
  restrict: 'E',
  bindings: {
    formConfig: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default formComponent;
