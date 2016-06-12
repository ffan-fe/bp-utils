/**
 * Created by fjywan on 16/6/7.
 */

class Controller {
  constructor($scope) {
    'ngInject'
    this.input = 1;
    this.time = 2;
    this.datepickerOption = {
      minDate: new Date()
    };
    this.viewFormat = 'YYYY-MM-DD HH:mm:ss';
    this.modelFormat = 'x'
  }
}

export default Controller;
