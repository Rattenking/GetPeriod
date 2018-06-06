## GetPeriod
微信小程序获取当前时间的时段插件（当天、当周、当月、当季度、当年、自定义时段）
## GetPeriod的使用
###1. 引入getperiod.js
```
const GetPeriod = require("../../utils/getperiod.js");
```
###2. 使用getperiod.js
```
// 在 onLoad 周期函数中 new GetPeriod()，并且用变量接收
Page({
  onLoad(){
    this.time = new GetPeriod();
  }
})
```

###2. 方法说明

####2.1 获取时段字段方法
```
let period = this.time.getPeriod(OBJECT);
```
> 获取对应时段的字段！

**OBJECT参数说明：**
| 参数 | 类型 | 必填 | 默认值 | 说明 |
| :-: | :-: | :-: |  :-: | :-: |
| periodType | String | 否 |  'now' | 返回字符串时段的类型（例如：今日、本周、本月、本季、本年） |
| spaceType | String | 否 |  '~' | 连接开始时间字段和结束时间字段的连接符 |

####2.2 单独获取开始或结束字段的方法列表
| 方法名称 | 参数 | 说明 |
| :-: | :-: | :-: |
| getPeriod | OBJECT | 获取时段字段方法 |
| getNowDate | 无 | 获取今日的日期 |
| getWeekStartDate | 无 | 获取本周的开始日期 |
| getWeekEndDate | 无 | 获取本周的结束日期 |
| getMonthStartDate | 无 | 获取本月的开始日期 |
| getMonthEndDate | 无 | 获取本月的结束日期 |
| getQuarterStartDate | 无 | 获取本季的开始日期 |
| getQuarterEndDate | 无 | 获取本季的结束日期 |
| getYearStartDate | 无 | 获取本年的开始日期 |
| getYearEndDate | 无 | 获取本年的结束日期 |


###3. 各方法的应用
```
//获取今天的日期
let nowDate = this.time.getNowDate();
console.log(nowDate)
//2018-06-05

//获取本周的开始日期
let startWeek = this.time.getWeekStartDate();
console.log(startWeek)
//2018-06-04

//获取本周的结束日期
let endWeek = this.time.getWeekEndDate();
console.log(endWeek)
//2018-06-10

//获取本月的开始日期
let startMonth = this.time.getMonthStartDate();
console.log(startMonth)
//2018-06-01

//获取本月的结束日期
let endMonth = this.time.getMonthEndDate();
console.log(endMonth)
//2018-06-30

//获取本季的开始日期
let startQuarter = this.time.getQuarterStartDate();
console.log(startQuarter)
//2018-04-01

//获取本季的结束日期
let endQuarter = this.time.getQuarterEndDate();
console.log(endQuarter)
//2018-06-30

//获取本年的开始日期
let startYear = this.time.getYearStartDate();
console.log(startYear)
//2018-01-01

//获取本年的结束日期
let endYear = this.time.getYearEndDate();
console.log(endYear)
//2018-12-31
```


## DEMO效果图
![当前时间的时段选择器插件效果图](http://rattenking.gitee.io/stone/images/rgif/period1.gif)

## 更新说明
> 2018/06/06 更新 getPeriod 获取不同时段的字符串！