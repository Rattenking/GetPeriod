class GetPeriod{
  constructor() {
    this.now = new Date();
    this.nowYear = this.now.getYear(); //当前年 
    this.nowMonth = this.now.getMonth(); //当前月 
    this.nowDay = this.now.getDate(); //当前日 
    this.nowDayOfWeek = this.now.getDay(); //今天是本周的第几天 
    this.nowYear += (this.nowYear < 2000) ? 1900 : 0;
  }
  //格式化数字
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  //格式化日期
  formatDate(date) {
    let myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();
    return [myyear, mymonth, myweekday].map(this.formatNumber).join('-');
  }
  //获取某月的天数
  getMonthDays(myMonth) {
    let monthStartDate = new Date(this.nowYear, myMonth, 1);
    let monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
    let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  }
  //获取本季度的开始月份
  getQuarterStartMonth() {
    let startMonth = 0;
    if (this.nowMonth < 3) {
      startMonth = 0;
    }
    if (2 < this.nowMonth && this.nowMonth < 6) {
      startMonth = 3;
    }
    if (5 < this.nowMonth && this.nowMonth < 9) {
      startMonth = 6;
    }
    if (this.nowMonth > 8) {
      startMonth = 9;
    }
    return startMonth;
  }
  //获取今天的日期
  getNowDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.nowDay));
  }
  //获取本周的开始日期
  getWeekStartDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 1));
  }
  //获取本周的结束日期
  getWeekEndDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek + 1)));
  }
  //获取本月的开始日期
  getMonthStartDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, 1));
  }
  //获取本月的结束日期
  getMonthEndDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.getMonthDays(this.nowMonth)));
  }
  //获取本季度的开始日期
  getQuarterStartDate() {
    return this.formatDate(new Date(this.nowYear, this.getQuarterStartMonth(), 1));
  }
  //获取本季度的结束日期 
  getQuarterEndDate() {
    return this.formatDate(new Date(this.nowYear, this.getQuarterStartMonth() + 2, this.getMonthDays(this.getQuarterStartMonth() + 2)));
  }
  //获取本年的开始日期
  getYearStartDate() {
    return this.formatDate(new Date(this.nowYear, 0, 1));
  }
  //获取本年的结束日期
  getYearEndDate() {
    return this.formatDate(new Date(this.nowYear, 11, 31));
  }
}
module.exports = GetPeriod;
