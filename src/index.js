/**
 * Created by fjywan on 16/6/6.
 */

import directives from './directive/directive.js'
import components from './components/components.js'
import template from './template/template.js'
import services from './service/services.js'

let bpUtils = angular.module('bp.utils',[
  directives.name,
  components.name,
  template.name,
  services.name
]);

export default bpUtils;
