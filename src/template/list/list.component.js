import template from './list.html';
import controller from './list.controller';
import './list.less';

let listComponent = {
  restrict: 'E',
  bindings: {
    config: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default listComponent;
