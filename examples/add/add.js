import uiRouter from 'angular-ui-router';
import addComponent from './add.component.js';

let addModule = angular.module('add', [
  uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('add', {
      url: '/add',
      template: '<add></add>'
    });
})

.component('add', addComponent);

export default addModule;
