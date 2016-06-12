import 'jquery';
import angular from 'angular';
import angularComponent from 'angular-component';
import 'bp-admin-skin';
import 'angular-ui-bootstrap';
import  bpUtils from '../src/index.js';
import appComponent from './app.component.js';
import './angular-locale_zh-cn.js';


angular.module('app', [
  bpUtils.name,
  'ui.bootstrap'
])
.component('app', appComponent);
