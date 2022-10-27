/*
 * @Author: ZhaoYue
 * @Date: 2022-10-27 20:44:36
 * @Description: 文件内容描述
 * @LastEditTime: 2022-10-27 21:08:30
 * @LastEditors: ZhaoYue
 * @FilePath: /checkin-helper/src/juejin/config.js
 */
// 配置文件
module.exports = {
  // 需要手动填写
  cookie: `xxx`,
  // 请求地址
  baseUrl: "https://api.juejin.cn",
  // api地址
  api: {
    // 签到
    checkIn: "/growth_api/v1/check_in",
    // 查询签到
    getCheckStatus: "/growth_api/v1/get_today_status",
    // 查询签到天数
    getCheckInDays: "/growth_api/v1/get_counts",
    // 查询当前矿石
    getCurrentPoint: "/growth_api/v1/get_cur_point",
    // 查询抽奖
    getlotteryStatus: "/growth_api/v1/lottery_config/get",
    // 抽奖
    draw: "/growth_api/v1/lottery/draw",
    // 沾喜气
    dipLucky: "/growth_api/v1/lottery_lucky/dip_lucky",
    // 获取沾喜气列表用户
    getLuckyUserList: "/growth_api/v1/lottery_history/global_big",
  },
  // 邮箱配置
  emailConfig: {
    // 邮箱服务 163|qq
    service: "163",
    // 邮箱 手动填写
    email: "",
    // 邮箱授权码  手动填写
    pass: "",
  },
};
