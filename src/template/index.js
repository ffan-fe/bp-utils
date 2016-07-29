import formTpl from './form/form.js';
import listTpl from './list/list.js'

let templateModule = angular.module('template', [
  formTpl.name,
  listTpl.name
]);

export default templateModule;
