## GetPeriod
微信小程序获取当前时间的时段插件（当天、当周、当月、当季度、当年、自定义时段）
## GetPeriod的使用
1. 引入getperiod.js
```
const GetPeriod = require("../../utils/getperiod.js");
```

2. 使用getperiod.js
```
this.time = new GetPeriod();

//获取本年的结束日期
let end = this.time.getYearEndDate();
```
## DEMO效果图
![当前时间的时段选择器插件效果图](http://rattenking.gitee.io/stone/images/rgif/period.gif)