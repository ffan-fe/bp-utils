import template from './checkboxtree.html';
import controller from './checkboxtree.controller';
import './checkboxtree.less';

let checkboxtreeComponent = {
  restrict: 'E',
  bindings: {
    list: '=',
    ngDisabled: '=',
    ngModel: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default checkboxtreeComponent;
