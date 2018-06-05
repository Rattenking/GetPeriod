## GetPeriod
微信小程序获取当前时间的时段插件（当天、当周、当月、当季度、当年、自定义时段）
## GetPeriod的使用
1. 引入getperiod.js
```
const GetPeriod = require("../../utils/getperiod.js");
```

2. 获取对应时间段的方法说明
```
//获取今天的日期
let nowDate = this.time.getNowDate();

//获取本周的开始日期
let startWeek = this.time.getWeekStartDate();

//获取本周的结束日期
let endWeek = this.time.getWeekEndDate();

//获取本月的开始日期
let startMonth = this.time.getMonthStartDate();

//获取本月的结束日期
let endMonth = this.time.getMonthEndDate();

//获取本季的开始日期
let startQuarter = this.time.getQuarterStartDate();

//获取本季的结束日期
let endQuarter = this.time.getQuarterEndDate();

//获取本年的开始日期
let startYear = this.time.getYearStartDate();

//获取本年的结束日期
let endYear = this.time.getYearEndDate();
```

3. 使用getperiod.js
```
this.time = new GetPeriod();

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
![当前时间的时段选择器插件效果图](http://rattenking.gitee.io/stone/images/rgif/period.gif)