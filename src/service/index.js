import bpApi from './api.js'
import AlertService from './alert/alert.js'
import HintService from './hint/hint.js'
export default angular.module('bp.services', [])
  .service({
    bpApi
  })
  .service({
    AlertService
  })
  .service({
    HintService
  });
