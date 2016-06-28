import template from './add.html';
import controller from './add.controller.js';
import './add.less';

let addComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default addComponent;
