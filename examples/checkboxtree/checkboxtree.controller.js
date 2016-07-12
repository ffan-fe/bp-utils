class RecruitrangeController {
  constructor(Restangular) {
    'ngInject'
    this.name = 'recruitrange';
    /**
     * list必须包含的字段：
     * parent -父节点的id
     */
    this.list = Restangular.allUrl('goodlist', '/goods/coupon_component/selectCategories').getList().$object;
  }
}

export default RecruitrangeController;
