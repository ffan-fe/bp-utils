import config from './default.config.js'
class MultiselectController {
  constructor($http, NgTableParams) {
    'ngInject'
    this.name = 'multiselect';
    this.checkedItems = this.checkedItems ? this.checkedItems : []; //保存选中条目的数组
    this.config = Object.assign({}, config, this.config);
    this.idField = this.config.returnField;
    this.listConfig = {
      url: this.config.url,
      //生成表格的字段
      fields: this.config.tableFields
    };
    this.tableParams = new NgTableParams({
      count: 10  //每页几条
    }, {
      counts: [],
      getData: params => {
        let paramData = angular.extend({
          offset: params.url().page,
          limit: 10
          }, this.form);
        this.loading = true;
        return $http({
          url: this.listConfig.url,
          method: "GET",
          params: paramData
        }).then(response => {
          console.log('response', response);
          params.total(response.data.totalCount); //帮你分几页
          this.loading = false;
          this.responseFormat(response.data.items);
          return response.data && response.data.items;
        })
      }
    });
  }

  /**
   * 单条数据checked字段改变处理函数：
   * 更新保存选中条目的数组
   * @param row
   */
  checkedChangeHandler(row, data) {
    if (row.checked) {
      let count = 0;
      this.checkedItems.push(row[this.idField]);
      data.forEach(item => {
        item.checked ? count++ : '';
      });
      if(count == data.length){
        this.isAllChecked = true;
      }
      this.checkedItems = angular.copy(this.checkedItems);
    } else {
      this.isAllChecked = false;
      this.remove(this.checkedItems, row[this.idField]);
      this.checkedItems = angular.copy(this.checkedItems);

    }
  }

  /**
   * 全选处理函数：
   * 只负责改变当前页每条数据的checked状态,
   * 更新保存选中条目的数组交给checkedChangeHandler
   * @param isAllChecked
   * @param data
   */
  allCheckedChangeHandler(isAllChecked, data) {
    if (isAllChecked) {
      data.forEach(item => {
        item.checked = true;
        if (!this.checkedItems.includes(item[this.idField])) {
          this.checkedChangeHandler(item, data);
        }
      });
    } else {
      data.forEach(item => {
        item.checked = false;
        this.checkedChangeHandler(item);
      });
    }
  }

  /**
   * 返回单页数据后，根据已有的checkedItems添加checked属性
   * @param response
   */
  responseFormat(response) {
    let count = 0;
    response.forEach(item => {
      if (this.checkedItems.includes(item[this.idField])) {
        count++;
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
    count == response.length ? this.isAllChecked = true : this.isAllChecked = false;

  }

  /**
   * 以下是工具函数
   */
  /**
   * 从array中移除element
   * @param array
   * @param element
   */
  remove(array, element) {
    let index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}

export default MultiselectController;
