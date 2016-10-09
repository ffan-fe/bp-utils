/**
 * Created by fjywan on 16/4/15.
 */

class Api {
  constructor($http, $q, APIBASE) {
    "ngInject";
    this.base = APIBASE ? APIBASE : '';
    this.$q = $q;
    this.$http = $http;
  }

  get(url, params) {
    let deferred = this.$q.defer();
    this.$http({
      url: getDomain(this.base + url),
      method: 'get',
      params: params || {}
    }).then(function (raw) {
      let result = raw.data;
      if (result.status == 200) {
        deferred.resolve(result.data);
      } else {
        deferred.reject(result);
      }
    }, function (raw) {
      deferred.reject(raw);
    });
    return deferred.promise;
  }

  post(url, params) {
    let deferred = this.$q.defer();
    this.$http({
      url: getDomain(this.base + url),
      data: $.param(params),
      method: "post",
      headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(function (raw) {
      let result = raw.data;
      if (result.status == 200) {
        deferred.resolve(result.data);
      } else {
        deferred.reject(result);
      }
    }, function (raw) {
      deferred.reject(raw);
    });
    return deferred.promise;
  }

  put(url, params) {
    let deferred = this.$q.defer();
    this.$http({
      url: getDomain(this.base + url),
      data: $.param(params),
      method: "put",
      headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(function (raw) {
      let result = raw.data;
      if (result.status == 200) {
        deferred.resolve(result.data);
      } else {
        deferred.reject(result);
      }
    }, function (raw) {
      deferred.reject(raw);
    });
    return deferred.promise;
  }
}

/**
 * 根据不同环境返回对应的请求地址
 * -本地不做任何处理
 * @param url
 */
function getDomain(url) {
  console.log('process.env.DEBUG', process.env.DEBUG);
  let href = location.href;

  if(process.env.DEBUG || ~href.search('localhost') || /(\d+\.){3}\d{1,3}/.test(href)){
    return url;
  }

  if(~href.search('sit')){
    return 'http://admin.sit.ffan.com' + url;
  }

  return 'http://admin.ffan.com' + url;
}

export default Api
