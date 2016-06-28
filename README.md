#### requirements
angular

#### directive

- date-view-format
```
require: ng-model

日期的显示格式 eg: 'YYYY-MM-DD HH:mm:ss'

```

- date-model-format
```
require: ng-model

日期的保存格式 eg: 'x'

```
#### components

- bp-datepicker
```
  示例：
  <bp-datepicker ng-model="vm.time" datepicker-options="vm.datepickerOption"></bp-datepicker>

  this.datepickerOption = {
        minDate: new Date(),
        viewFormat: 'YYYY-MM-DD HH:mm:ss',
        modelFormat: 'x'
      };

```
<section>
    <h5>配置对象支持:</h2>
    <div class="text-muted">datepicker-options 传入datepicker配置对象</div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>键名</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>customClass</td>
        <td>({date: date, mode: mode}) - An optional expression to add classes based on passing an object with date and current mode properties.</td>
      </tr>
      <tr>
        <td>dateDisabled</td>
        <td>({date: date, mode: mode}) - An optional expression to disable visible options based on passing an object with date and current mode properties.</td>
      </tr>
      <tr>
        <td>datepickerMode</td>
        <td>(Default: day) - Current mode of the datepicker (day|month|year). Can be used to initialize the datepicker in a specific mode.</td>
      </tr>
      <tr>
        <td>formatDay</td>
        <td>(Default: dd) - Format of day in month.</td>
      </tr>
      <tr>
        <td>formatMonth</td>
        <td>(Default: MMMM) - Format of month in year.</td>
      </tr>
      <tr>
        <td>formatYear</td>
        <td>(Default: yyyy) - Format of year in year range.</td>
      </tr>
      <tr>
        <td>initDate</td>
        <td>(Default: now) - The initial date view when no model value is specified.</td>
      </tr>
      <tr>
        <td>maxDate</td>
        <td>(Default: null) - Defines the maximum available date. Requires a Javascript Date object.</td>
      </tr>
      <tr>
        <td>maxMode</td>
        <td>(Default: year) - Sets an upper limit for mode.</td>
      </tr>
      <tr>
        <td>minDate</td>
        <td>(Default: null) - Defines the minimum available date. Requires a Javascript Date object.</td>
      </tr>
      <tr>
        <td>minMode</td>
        <td>(Default: day) - Sets a lower limit for mode.</td>
      </tr>
      <tr>
        <td>shortcutPropagation</td>
        <td>(Default: false) - An option to disable the propagation of the keydown event.</td>
      </tr>
      <tr>
        <td>minuteStep</td>
        <td>(Default: 1) - Number of minutes to increase or decrease when using a button.</td>
      </tr>
      <tr>
        <td>secondStep</td>
        <td>(Default: 1) - Number of seconds to increase or decrease when using a button.</td>
      </tr>
      <tr>
        <td>showSeconds</td>
        <td>(Default: false) - Show seconds input.</td>
      </tr>
      <tr>
        <td>showSeconds</td>
        <td>(Default: false) - Show seconds input.</td>
      </tr>
      <tr>
        <td>viewFormat</td>
        <td>日期的显示格式 默认: 'YYYY-MM-DD HH:mm:ss'；</td>
      </tr>
      <tr>
        <td>modelFormat</td>
        <td>日期的保存格式 默认: 'x'</td>
      </tr>
      </tbody>
    </table>
  </section>

- bp-rangepicker

```
示例：
<bp-rangepicker ng-start-model="vm.startTime"
                ng-end-model="vm.endTime"
                rangepicker-options="vm.rangepickerOption">
</bp-rangepicker>

this.rangepickerOption = {
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x'
    };


支持配置字段同bp-datepicker
```

- bp-checkboxtree
```
示例：
<bp-checkboxtree list="vm.list" ng-model="vm.form.catagory"></bp-checkboxtree>

vm.list = Restangular.allUrl('goodlist', '/goods/coupon_component/selectCategories').getList().$object;

- bp-checkboxtree
```
示例：
<multi-select config="vm.config" ng-model="vm.multiSelectModel"></multi-select>

vm.config =  {
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

```
#### template

- form-tpl
```
<form-tpl form-config="vm.formConfig"></form-tpl>
 示例：
   vm.formConfig = {

     //生成表单的信息，包含验证及对应错误提示的设置
     fields: [
       {
         type: 'text',
         displayName: '活动名称',
         name: 'testText',
         validateRules: {
           required: true,
           minlength: 0,
           maxlength: 50
         }
       },
       {
         type: 'text',
         displayName: '活动标签',
         name: 'tag',
         validateRules: {
           required: false,
           minlength: 0,
           maxlength: 50
         }
       },
       {
         type: 'radio',
         displayName: '营销工具',
         name: 'testRadio',
         validateRules: {
           required: false
         },
         options: [
           {
             text: '闪购',
             value: 'option1'
           },
           {
             text: '领券',
             value: 'option2'
           }
         ]
       },
       {
         type: 'daterange',
         displayName: '活动时间',
         name: ['startTime, endTime'],
         validateRules: {
           required: true
         }
       },
       {
         type: 'richtext',
         displayName: '活动说明',
         name: 'testrichtext',
         validateRules: {
           required: true,
           minlength: 1,
           maxlenght: 1000
         }
       },
       {
         type: 'richtext',
         displayName: '活动规则',
         name: 'activityrule',
         validateRules: {
           required: true,
           minlength: 1,
           maxlenght: 1000
         }
       },
       {
         type: 'richtext',
         displayName: '活动说明',
         name: 'testrichtext',
         validateRules: {
           required: true,
           minlength: 1,
           maxlenght: 10
         }
       },
       {
         type: 'checkbox',
         displayName: '是否公开招募',
         name: 'testcheckbox',
         validateRules: {
           required: false
         }
       },
       {
         type: 'image',
         displayName: '测试image',
         name: 'image',
         validateRules: {
           required: false
         }
       }
     ]
   }
```
- list-tpl
```
示例：
<list-tpl config="vm.config"></list-tpl>


let vm.Config = {
  title: '摇一摇活动列表', //页面标题

  //拉取数据的url
  url: '/marketcms/shakeCityActivity/getActivityList',

  createBtn: {//按钮的权限控制硬编码，并非由配置而来，暂没有想到好的做法
    displayName: '创建活动',
    href: '#/city/add',
    auth: false //注意：只有等于false才会隐藏，undefined或true都会显示,使用 !== false
  },

  //生成查询表单的信息
  queryFields: [
    {
      type: 'text',
      displayName: '活动名称',
      name: 'name'
    },
    {
      type: 'uiselect',
      displayName: '所属城市',
      name: 'cityId',
      url: '/marketcms/shakeBase/getCitys',
      paramField: 'cityName'

    },
    {
      type: 'text',
      displayName: '提交人',
      name: 'createUser'
    },
    {
      type: 'select',
      displayName: '活动状态',
      name: 'status',
      options: [
        {
          text: '全部',
          value: ''
        },
        {
          text: '已保存',
          value: '1'
        },
        {
          text: '待审批',
          value: '2'
        },
        {
          text: '已同意',
          value: '3'
        },
        {
          text: '已驳回',
          value: '4'
        },
        {
          text: '已暂停',
          value: '5'
        },
        {
          text: '已结束',
          value: '6'
        }
      ]
    },
    {
      type: 'daterange',
      displayName: '活动时间',
      name: ['startTime', 'endTime']
    }
  ],
  //在table中展示的字段
  tableFields: [
    {
      displayName: '活动编号',
      name: 'code'
    },
    {
      displayName: '活动名称',
      name: 'name'
    },
    {
      displayName: '开始时间',
      name: 'startTime'
    },
    {
      displayName: '截止时间',
      name: 'endTime'
    },
    {
      displayName: '提交人',
      name: 'createUserName'
    },
    {
      displayName: '所属城市',
      name: 'cityName'
    },
    {
      displayName: '活动位置',
      name: 'plazaName'
    },
    {
      displayName: '优先级',
      name: 'priority'
    },
    {
      displayName: '活动状态',
      name: 'status'
    }
  ],
  //table内的操作按钮
  operations: [
    {
      displayName: '查看',
      href: '#/city/detail/' //接受三种字段：state, href, action. action函数，接收当前条目id
    }
  ]
};


export default Config;

```
#### service








