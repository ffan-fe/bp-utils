/**
 * Created by fjywan on 16/6/6.
 */

import angular from 'angular';
import directives from './directive/directive.js'

let bpUtils = angular.module('bp.utils',[
  directives.name
]);

export default bpUtils;
