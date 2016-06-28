import template from './form.html';
import controller from './form.controller';
import './form.less';

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
