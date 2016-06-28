import 'jquery';
import angular from 'angular';
import angularComponent from 'angular-component';
import 'bp-admin-skin';
import 'angular-ui-bootstrap';
import  bpUtils from '../src/index.js';
import appComponent from './app.component.js';
import './angular-locale_zh-cn.js';
import ffanNgtable from 'ffan-ng-table';
import service from './services/services.js'
import add from './add/add.js'
import list from './list/list.js'
import 'ui-select';
import 'ui-select/dist/select.css'
import 'lodash'
import 'restangular'
import 'ffan-bp-menu'
import checkboxtree from './checkboxtree/checkboxtree.js'
import multiselect from './multiselectTest/multiselectTest.js'
angular.module('app', [
  bpUtils.name,
  'ui.bootstrap',
  'ngTable',
  'ui.select',
  'bp.menu',
  'restangular',
  service.name,
  add.name,
  list.name,
  checkboxtree.name,
  multiselect.name
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('index', {
      url: '/',
      template: '<app></app>'
    });
  }).config(function (RestangularProvider) {
    'ngInject'
    // add a response interceptor
    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
      let extractedData;
      // .. to look for getList operations
      if (operation === "getList") {
        console.log(data);
        // .. and handle the data and meta data
        extractedData = data.data;
      } else {
        extractedData = data;
      }
      return extractedData;
    });

  })
  .constant('APIBASE', '/marketcms/')
  .component('app', appComponent);
