/**
 * Created by fjywan on 16/3/15.
 */
import moment from 'moment';

class BaseController {
  constructor($location, $state, Api, urls) {
    let self = this;
    this.Api = Api;
    this.$state = $state;
    this.$location = $location;
    if(urls){
      this.urls = urls;
    }else{
      this.urls = {
        detailUrl: 'shakeCityActivity/getActivityDetail',
        saveUrl: 'shakeCityActivity/save',
        commitUrl: 'shakeCityActivity/commit',
        agreeUrl: 'shakeCityActivity/agree',
        rejectUrl: 'shakeCityActivity/reject',
        offsaleUrl: 'shakeCityActivity/offsale',
        stopUrl: 'shakeCityActivity/stop',
        getLinkTypeUrl: 'shakeBase/getLinkType'
      };
    }
    this.linkIdArray = []; //用来存链接类型的id，来判断是否重复添加
  }

  fetchAuth(cb){
    this.Api.get('shakeCityActivity/getBtnAuth', '', 0).then(response => {
      console.log('base response', response);
      this.auths = response;
      cb ? cb.call(this, response, 'btn'):'';
    });
    this.Api.get('shakeBase/authRangeInfo', '', 0).then(response => {
      console.log('base response', response);
      this.cityAuth = response;
      cb ? cb.call(this, response.city, 'city'):'';
    });
  }

  /**
   * 拉回权限信息后更新config
   * @param auth
   * @param whichAuth ['btn', 'city']
   */
  updateConfig(auth, whichAuth){
    if(whichAuth == 'btn'){
      this.config.createBtn.auth = auth.createBtn
    }
    if(whichAuth == 'city'){
      if(auth.readonly){
        this.config.queryFields[1].type = 'display';
        this.config.queryFields[1].displayVal = auth.name;
        this.config.queryFields[1].initVal = auth.id;
      }
    }
    this.config = angular.copy(this.config);
  }

  goToList(state) {
    console.info('state', state);
    if(state){
      this.$state.go(state + 'list');
    }else{
      this.$state.go('citylist');
    }
  }

  getCityList(name, self, isAlert, isInit) {
    console.log('self', self);
    this.Api.get('shakeBase/getCitys', {
      cityName: name
    }, isAlert).then(function (data) {
      self.cityList = data;
      if(isInit){
        self.city = data[0]
      }
    })
  }

  getPlazaList(name, self, isAlert, isInit) {
    console.log('self', self);
    this.Api.get('shakeBase/getPlazas', {
      plazaName: name,
      cityId: self.searchObj.cityId
    }, isAlert).then(function (data) {
      self.plazaList = data;
      if(isInit){
        self.plaza = data[0]
      }
    })
  }

  edit(state) {
    if(state){
      this.$location.url(state + '/edit/' + this.$state.params.id);
    }else{
      this.$location.url('city/edit/' + this.$state.params.id);
    }
  }

  stop(id, state) {
    let self = this;
    if (confirm("确认停止该活动吗？") == true) {
      this.Api.post(this.urls.stopUrl, {
        id: id
      }).then(function (data) {
        alert('停止/成功');
        self.goToList(state);
      })
    } else {
      return false;
    }
  }

  agree(id, state) {
    let self = this;
    this.Api.post(this.urls.agreeUrl, {
      id: id
    }).then(function (data) {
      alert('同意成功');
      self.goToList(state);
    })
  }

  reject(id, state) {
    let self = this;
    this.Api.post(this.urls.rejectUrl, {
      id: id
    }).then(function (data) {
      alert('驳回成功');
      self.goToList(state);
    })
  }

  offsale(id, state) {
    let self = this;
    this.Api.post(this.urls.offsaleUrl, {
      id: id
    }).then(function (data) {
      alert('暂停成功');
      self.goToList(state);
    })
  }

  //开始时间限制
  functionbeforeStartTimeRender($view, $dates) {
    let minDate = moment().startOf($view).valueOf(); // Now
    angular.forEach($dates, function (date) {
      let localDateValue = date.localDateValue();
      date.selectable = localDateValue >= minDate;//&& localDateValue <= maxDate;
    });
  }
  /**
   * 获得类型列表
      "3": "优惠券",
      "8": "营销活动",
      "97": "H5链接",
      "99": "非H5其他链接",
      "100": "纯文案",
      "101": "零花钱"
   */
  getLinkTypeList() {
    return this.Api.get('shakeBase/getLinkType');
  }
}

export default BaseController;
