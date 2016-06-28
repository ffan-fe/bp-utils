class RecruitrangeController {
  constructor(Restangular) {
    'ngInject'
    this.name = 'recruitrange';
    this.list = Restangular.allUrl('goodlist', '/goods/coupon_component/selectCategories').getList().$object;

  }
}

export default RecruitrangeController;
