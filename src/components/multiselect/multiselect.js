import angular from 'angular';
import uiRouter from 'angular-ui-router';
import multiselectComponent from './multiselect.component';

let multiselectModule = angular.module('multiselect', [
  uiRouter
])

.component('multiSelect', multiselectComponent);

export default multiselectModule;
