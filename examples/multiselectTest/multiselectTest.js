import angular from 'angular';
import uiRouter from 'angular-ui-router';
import multiselectTestComponent from './multiselectTest.component';

let multiselectTestModule = angular.module('multiselectTest', [
  uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('multiselectTest', {
      url: '/multiselect',
      template: '<multiselect-test></multiselect-test>'
    });
})
.component('multiselectTest', multiselectTestComponent);

export default multiselectTestModule;
