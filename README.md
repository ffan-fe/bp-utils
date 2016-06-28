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
#### template



#### service








