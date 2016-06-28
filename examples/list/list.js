import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './list.component.js';

let listModule = angular.module('list', [
  uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('citylist', {
      url: '/list',
      template: '<list></list>'
    });
})

.component('list', listComponent);

export default listModule;
