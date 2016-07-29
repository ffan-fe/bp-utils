import DefaultConfig from './config.js'
class AddController {
  constructor($scope, $state, NgTableParams, Restangular, bpApi) {
    'ngInject'
    this.datepickerOption = {
      //minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x'
    };
    this.$scope = $scope;
    this.$state = $state;
    this.Restangular = Restangular;
    this.NgTableParams = NgTableParams;
    this.DefaultConfig = DefaultConfig;
    this.btns = [
      {
        name: '保存下一步'
      }
    ];
    //约定：form是持久化到服务器的数据
    this.form = {};

    //如果有FormConfig传进来，则使用，否则使用默认的
    this.formConfig = DefaultConfig.formConfig;

    this.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1,
      'show-weeks': false
    };
    //上传图片
    this.uploadFile = function(file, errFile){

      $scope.file = file;
      $scope.errFile = errFile;
      if (!!file) {
        file.upload = Upload.upload({
          url: '/pointgift/gift/uploadFile',
          data: {image: file}
        });
        file.upload.then(function(response){
          console.log('response',response);
          var responseData = response.data && response.data.data;
          //console.log('responseData',responseData);
          $scope.vm.addInfo.pic = responseData.imgname;
          $scope.vm.preview = responseData.imgurl;
        }, function(response){
          console && console.log('img Error');
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        })
      }
    };
  }

  hasType(field) {
    return field.type;
  }

  refreshOptions(url, keyWord) {
    this.bpApi.get(url, {keyWord: keyWord}).then(function (data) {
      return data;
    });
  }

  submitForm(url) {
    this.Restangular.all('projects').post(this.form).then(function(project) {
      $location.path('/list');
    });
  }

  inArray(item, array, isInt) {
    if (isInt) {
      return array.indexOf(parseInt(item)) != -1;
    } else {
      return array.indexOf(item) != -1;
    }
  }



  reset() {
    if (this.ProjectConfig.reset) {
      this.ProjectConfig.reset(this);
    } else {
      this.DefaultConfig.reset(this);
    }
  }

  search() {
    if (this.ProjectConfig.search) {
      this.ProjectConfig.search(this);
    } else {
      this.DefaultConfig.search(this);
    }
  }
}

export default AddController;
