const GetPeriod = require("../../utils/getperiod.js");
Page({
  data:{
    dateType: 0
  },
  onLoad(){
    this.time = new GetPeriod();
    this.setData({ dateType: 0, startDate: this.time.getNowDate(), endDate: this.time.getNowDate() });
  },
  // 获取当前时间段
  getDateType(e) {
    let dateType = e.currentTarget.dataset.datetype;
    let startDate = '', endDate = '';

    if (dateType == 0) {//今天
      startDate = this.time.getNowDate();
      endDate = this.time.getNowDate();
    } else if (dateType == 1) {//本周
      startDate = this.time.getWeekStartDate();
      endDate = this.time.getWeekEndDate();
    } else if (dateType == 2) {//本月
      startDate = this.time.getMonthStartDate();
      endDate = this.time.getMonthEndDate();
    } else if (dateType == 3) {//本年
      startDate = this.time.getYearStartDate();
      endDate = this.time.getYearEndDate();
    } else if (dateType == 4) {//选择时段初始化为当天时间段
      startDate = this.time.getNowDate();
      endDate = this.time.getNowDate();
    } else if (dateType == 5) {//本季度
      startDate = this.time.getQuarterStartDate();
      endDate = this.time.getQuarterEndDate();
    }

    this.setData({ dateType: dateType, startDate: startDate, endDate: endDate });
  },
  bindDateChange(e){
    if(e.currentTarget.id == 'start'){
      this.setData({ startDate: e.detail.value})
    } else if (e.currentTarget.id == 'end'){
      this.setData({ endDate: e.detail.value })
    }else{
      return;
    }
  }
})