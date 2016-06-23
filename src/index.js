/**
 * Created by fjywan on 16/6/6.
 */

import directives from './directive/directive.js'
import components from './components/components.js'

let bpUtils = angular.module('bp.utils',[
  directives.name,
  components.name
]);

export default bpUtils;
