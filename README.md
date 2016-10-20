#### 开发：
```
clone下来后：
npm install
启动server执行gulp
运行测试执行 npm run test

生成示例页面：
1.切到gh-pages分支
2.git merge master
3.npm run build:examples
注意：不要在gh-pages做代码修改，这里只用于合进最新代码并生成示例页面
```
#### 使用：
```
执行npm install bp-utils --save
在入口文件中添加：
import 'bp-utils'
angular.module('yourapp', [
  'bp.utils'
])
即可使用以下所有指令和服务
```
#### requirements
angular
angular-ui-tree

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

- bpFieldError

(form-tpl 内使用)

```
require: ng-model

在表单dirty且invalid在当前表单下或指定容器内展示错误信息

使用示例：
  <textarea class="form-control"
     ng-model="vm.form[field.name]"
     ng-required="field.validateRules.required"
     maxlength="{{field.validateRules.maxlength}}"
     minlength="{{field.validateRules.minlength}}"
     bp-field-error="{{field.errorMsgs}}">
  </textarea>

bp-field-error 对常见错误类型的默认展示信息如下：
{
    email: '不是有效格式的邮件地址',
    url: '不是有效格式的url',
    required: '此项不能为空',
    same: '此项必须与密码相同',
    max: '超过上限',
    min: '低于下限',
    number: '必须为数字',
    parse: '根据验证规则，已重置无效值'
}

使用指令时允许传入自定义错误信息的对象来复写扩展上面默认的eg:
{
    min: '最小值不能低于1',
    max: '最大值不能超过10',
    large: 'number2要大于number1'
}
来自定义错误信息

指定展示错误信息的容器
bp-field-error-selector="{{field.selector}}"
eg:
 <input
    class="form-control"
    type="number"
    name="{{field.name}}"
    ng-required="field.validateRules.required"
    bp-field-error="{{field.errorMsgs}}"
    bp-field-error-selector="{{field.selector}}"
    bp-large-than="field.validateRules.largeThan"
    bp-large-than-form="vm.form"
    max="{{field.validateRules.max}}"
    min="{{field.validateRules.min}}"
    ng-model="vm.form[field.name]">

注意：
bp-field-error和bp-field-error-selector都只接受字符串，而不是表达式
```
##### 关联验证相关指令

- bpLargeThan

(form-tpl 内使用)

```
require: ng-model

当前表单内一个字段值要求比另一字段大才和合法时使用；
eg：
 <input
    class="form-control"
    type="number"
    name="{{field.name}}"
    ng-required="field.validateRules.required"
    bp-field-error="{{field.errorMsgs}}"
    bp-field-error-selector="{{field.selector}}"
    bp-large-than="field.validateRules.largeThan"
    bp-large-than-form="vm.form"
    max="{{field.validateRules.max}}"
    min="{{field.validateRules.min}}"
    ng-model="vm.form[field.name]">

bp-large-than和
bp-large-than-form
要配合使用，
bp-large-than传入这样的配置对象：
{
    type: 'date', //'number'或'date',决定比较前是否要进行转换
    which: 'testDate1' //和哪个字段比较
}

bp-large-than-form传入字段所在form的引用，这样才能找到要比较字段的值

注意：传入的是表达式，指令内部eval

```


#### components

- bp-datepicker
```
  示例：
  <bp-datepicker model="vm.time" datepicker-options="vm.datepickerOption"></bp-datepicker>

  this.datepickerOption = {
        minDate: new Date(),
        viewFormat: 'YYYY-MM-DD HH:mm:ss',
        modelFormat: 'x',
        placeholder: '测试'
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
      modelFormat: 'x',
      placeholder: ['开始时间', '结束时间']
    };


支持配置字段同bp-datepicker
```

- bp-checkboxtree
```
示例：
<bp-checkboxtree list-promise="vm.loadPromise" ng-model="vm.form.cities" config="vm.config"></bp-checkboxtree>

//拉去列表数据的promise
this.loadPromise = $http.get('/Database/coupon_component/selectCity');

//这个配置用于避免或减少数据转换
this.config = {
      //指示子节点的字段名
      fieldOfChildren: 'child',
      //指示节点名的字段
      fieldOfName: 'name',
      //指示节点id的字段
      fieldOfId: 'categoryId'
};

//约定：所有抛到后端的都放到这个键下
this.form = {};


注意：ng-model中的每条数据必须包含节点id才能正确回填
```
- multi-select
```
示例：
<multi-select config="vm.config" ng-model="vm.multiSelectModel"></multi-select>

vm.config =  {
               //拉取数据的url
               url: '/Database/coupon_component/storeQueryList',

               //标识每个选项的字段，用于选中选项的查询操作
               uniqueField: 'storeId',

               //默认返回uniqueField值的数组
               //returnModel: 'all',

               //生成查询表单的信息w
               queryFields: [
                 {
                   type: 'text',
                   displayName: '门店名称',
                   name: 'storeName'
                 },
                 {
                   type: 'text',
                   displayName: '商户名称',
                   name: 'merchantName'
                 },
                 {
                   type: 'text',
                   displayName: '品牌名称',
                   name: 'brandNames'
                 },
                 {
                   type: 'text',
                   displayName: '商圈名称',
                   name: 'plazaName'
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
               ],

               //ng-table的配置项
               tableConfig: {
                 limit: 10, //每页多少个
                 pageName: 'page', //后端接受的页码字段名
                 excel: false //是否需要导出excel
               },

               //table内的操作按钮
                 operations: [
                   {
                     displayName: '查看',
                     itemId: 'id', //贫道链接后面的字段
                     href: '#/city/detail/' //接受三种字段：state, href, action. action函数，接收当前条目id
                   },
                   {
                     displayName: '删除',
                     itemId: 'id', //标识每一列数据唯一性的字段名，它的值会作为第一个参数传给action
                     action: function (itemId, tableParams) {
                       tableParams.parameters({page: 1}).reload();
                     }
                   }
                 ],

               //获得multiselect controller的引用来初始化this,这个函数会在读取配置后自动执行
                //     initContrl: that => {
                 //      this.listTableParams = that.tableParams;
                 //    }
             };


支持对特定行disable状态的控制: 根据list中isDisable字段来判断

注意:
- 配置中拉取数据的url，在component内使用get请求拉去数据；
- 如果get请求需要传一些固定的参数，我的做法是直接拼在url;
- url拉过来的数据必须符合特定的结构：
  eg:{
     totalCount: 20088,
     items: [
     {
     brandNames: "我愿意",
     storeId: 2036302,
     storeName: "I DO",
     merchantName: "福建若可投资有限公司（仓山万达珠宝店）",
     plazaName: "福州仓山万达广场",
     storeNo: null,
     businessTypeName: null
     },
      ...
     ]
     }
  要保证response.data.items 是一个list;
  如果不符合需要转换数据结构，
  我的做法：拦截http请求转结构；
  推荐使用restangular,提供更方便的api
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      let extractedData;
      // .. to look for getList operations
      if (operation === "getList") {
        console.log(data);
        // .. and handle the data and meta data
        extractedData = data.data;
      } else {
        extractedData = data;
      }
      return extractedData;
    });

  如果后端不符合restful，可以这样：
  $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
    return {
     'request': function(config) {
         // do sth
      },

      'response': function(response) {
         // do sth
      }
    };
  });

 更详细的介绍见这里：https://docs.angularjs.org/api/ng/service/$http;

 自己的做法是尽量把数据转换从业务逻辑剥离放到这；

```
#### template

- form-tpl
```
<form-tpl form-config="vm.formConfig" model="vm.form"></form-tpl>
form-config传入生成表单的配置，model指定表单的ng-model都绑到哪个键下
 示例：
   form = {}
   formConfig = {

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


```
#### service
- bpApi

```
简化和统一$http post和get传递参数的api

用法：
bpApi.post('url', {})
bpApi.get('url', {})
```
- AlertService

```
alert, confirm的替代

用法：
AlertService
      .alert({
        title: "测试",
        content: "你好，我是警告"
      })
      .then(function () {
        alert("你刚才点了确定");
      });

AlertService
     .alert({
       title: "测试",
       content: "你好，我是警告",
       hint: ["操作提示1", "如果想要在操作的时候给点提示，那就写在这里"]
     })
     .then(function () {
       alert("你刚才点了确定");
     });

AlertService
      .confirm({
        title: "测试",
        contents: ["你好，确定要删除以下内容吗？", "aaa, bbb"]
      })
      .then(function () {
        alert("你刚才点了确定");
      }, function () {
        alert("你刚才点了取消");
      });

```
- HintService

```
消息通知类的alert可以用这个

用法：
HintService.hint({title: "我操作成功了", content: "结果是：" + $scope.hintContent})
```









