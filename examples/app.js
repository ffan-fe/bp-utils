import angular from 'angular';
import 'angular-component';
import 'bp-admin-skin';
import 'angular-ui-bootstrap';
import './angular-locale_zh-cn.js';
import 'ffan-ng-table';
import 'ui-select';
import 'ui-select/dist/select.css'
import 'lodash'
import 'restangular'
import 'ffan-bp-menu'

import  bpUtils from '../src/index.js';


import form from './template/form/index.js'
import list from './template/list/index.js'
import datepicker from './components/datepicker/index.js'
import checkboxtree from './components/checkboxtree/index.js'
import multiselect from './components/multiselect/index.js'
import alert from './service/alert/index.js'
import hint from './service/hint/index.js'

import requestHandleFunc from './request.js'
import responseHandleFunc from './response.js'

angular.module('app', [
  bpUtils.name,
  'ui.bootstrap',
  'ngTable',
  'ui.select',
  'bp.menu',
  'restangular',
  form.name,
  list.name,
  datepicker.name,
  checkboxtree.name,
  multiselect.name,
  alert.name,
  hint.name
])
  .config(function (RestangularProvider) {
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
  .config(function ($httpProvider) {
    "ngInject";
    $httpProvider.interceptors.push('urlInterceptor');
  })
  .factory('urlInterceptor', function () {
    return {
      'request': requestHandleFunc,
      'response': responseHandleFunc,
      'responseError': responseHandleFunc
    };
  })
  .constant('APIBASE', '/marketcms/');
