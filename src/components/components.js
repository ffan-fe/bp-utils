import datepicker from './datepicker/main.js'
import rangepicker from './rangepicker/main.js'

let componentModule = angular.module('bp.components', [
  datepicker.name,
  rangepicker.name
])
export default componentModule;
