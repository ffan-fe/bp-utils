import template from './multiselect.html';
import controller from './multiselect.controller';
import './multiselect.less';

let multiselectComponent = {
  restrict: 'E',
  bindings: {
    checkedItems: '=ngModel',
    config: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default multiselectComponent;
