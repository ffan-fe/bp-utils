import template from './list.html';
import controller from './list.controller.js';
import './list.less';

let listComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default listComponent;
