import datepicker from './datepicker/main.js'
import rangepicker from './rangepicker/main.js'
import checkboxtree from './checkboxtree/checkboxtree.js'
import multiselect from './multiselect/multiselect.js'


let componentModule = angular.module('bp.components', [
  datepicker.name,
  rangepicker.name,
  checkboxtree.name,
  multiselect.name
]);
export default componentModule;
