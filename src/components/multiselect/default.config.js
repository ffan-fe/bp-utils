/**
 * Created by fjywan on 16/6/20.
 */

let Config = {
  //拉取数据的url
  url: '/Database/coupon_component/storeQueryList',

  //标识每个选项的字段
  returnField: 'storeId',

  //生成查询表单的信息w
  queryFields: [
    {
      type: 'text',
      displayName: '门店名称',
      name: 'testText'
    },
    {
      type: 'text',
      displayName: '商户名称',
      name: 'testText'
    },
    {
      type: 'text',
      displayName: '品牌名称',
      name: 'testText'
    },
    {
      type: 'text',
      displayName: '商圈名称',
      name: 'testText'
    }
  ],
  //在table中展示的字段
  tableFields: [
    {
      displayName: '门店名称',
      name: 'storeName'
    },
    {
      displayName: '所属商户',
      name: 'merchantName'
    },
    {
      displayName: '经营品牌',
      name: 'brandNames'
    },
    {
      displayName: '所属商圈',
      name: 'plazaName'
    }
  ]
};


export default Config;
