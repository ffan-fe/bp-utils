import angular from 'angular';
import uiRouter from 'angular-ui-router';
import multiselectComponent from './component.js';

let multiselectModule = angular.module('multiselect', [
  uiRouter
])

.component('multiSelect', multiselectComponent);

export default multiselectModule;
