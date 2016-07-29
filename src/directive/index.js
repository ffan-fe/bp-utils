import dateModelFormat from './dateModelFormat.js'
import dateViewFormat from './dateViewFormat.js'

let bpDirectives = angular.module('bp.directives',[])
  .directive('dateModelFormat', ()=>dateModelFormat)
  .directive('dateViewFormat', ()=>dateViewFormat);

export default bpDirectives;
