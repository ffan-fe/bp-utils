/**
 * Created by fjywan on 16/4/28.
 */
let config = {
  formConfig: {
    //列表页
    list: {
      searchUrl: 'search/keyword'
    },

    //每条数据的所有状态，事先列出来，用于下面按钮显示控制的设置
    status: [
      {
        text: '已保存',
        value: 1
      },
      {
        text: '已同意',
        value: 2
      },
      {
        text: '已驳回',
        value: 3
      },
      {
        text: '已审核',
        value: 4
      },
      {
        text: '已停止',
        value: 5
      }
    ],


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
  },

  reset: function (self) {
    self.form = {};
  },

  search: function (self) {
    self.tableParams.parameters({page: 1}).reload();
  }
};

export default config;
