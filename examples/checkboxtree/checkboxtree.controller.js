class RecruitrangeController {
  constructor(Restangular) {
    'ngInject'
    this.name = 'recruitrange';
    this.form = {};
    this.form.catagory = [{
      "categoryId": 1673,
      "categoryName": "TEST",
      "categoryLevel": 1,
      "sort": 2,
      "isLeaf": 1,
      "version": 3,
      "categoryPicSrc": "T1TH_TBQZT1RCvBVdK",
      "createTime": 1466650558000,
      "updateTime": 1467788030000,
      "route": "goodlist",
      "reqParams": null,
      "restangularized": true,
      "fromServer": true,
      "parentResource": null,
      "restangularCollection": false,
      "checked": true
    }, {
      "categoryId": 1670,
      "categoryName": "测试系统一级目录y",
      "categoryLevel": 1,
      "sort": 3,
      "isLeaf": 0,
      "version": 3,
      "categoryPicSrc": "T15pKTBjWT1RCvBVdK",
      "createTime": 1466578095000,
      "updateTime": 1466650558000,
      "children": [],
      "route": "goodlist",
      "reqParams": null,
      "restangularized": true,
      "fromServer": true,
      "parentResource": null,
      "restangularCollection": false,
      "checked": true
    },{
      "categoryId": 1671,
      "categoryName": "测试系统二级类目y",
      "categoryLevel": 2,
      "parent": 1670,
      "sort": 0,
      "isLeaf": 0,
      "version": 2,
      "categoryPicSrc": "T1z8ATBXAT1RCvBVdK",
      "createTime": 1466578172000,
      "updateTime": 1466578205000,
      "children": [],
      "checked": true
    },{
      "categoryId": 1672,
      "categoryName": "测试系统三级类目y",
      "categoryLevel": 3,
      "parent": 1671,
      "sort": 0,
      "isLeaf": 1,
      "version": 1,
      "categoryPicSrc": "T108ATB4AT1RCvBVdK",
      "createTime": 1466578205000,
      "updateTime": 1466578205000,
      "checked": true
    }];
    /**
     * list必须包含的字段：
     * parent -父节点的id
     */
    this.listPromise = Restangular.allUrl('goodlist', '/goods/coupon_component/selectCategories').getList();
  }
}

export default RecruitrangeController;
