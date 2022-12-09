/*
 * @Author: ZhaoYue
 * @Date: 2022-10-27 20:44:36
 * @Description: 文件内容描述
 * @LastEditTime: 2022-10-27 21:27:53
 * @LastEditors: ZhaoYue
 * @FilePath: /checkin-helper/src/juejin/config.js
 */
// 配置文件
module.exports = {
  // 需要手动填写
  cookie: `sid_guard=19e5fc3ee708279dcb8527bfd435a9df|1655347411|31536000|Fri,+16-Jun-2023+02:43:31+GMT; uid_tt=c9b59ed09edf4ca12d691a6ebd4ecff0; uid_tt_ss=c9b59ed09edf4ca12d691a6ebd4ecff0; sid_tt=19e5fc3ee708279dcb8527bfd435a9df; sessionid=19e5fc3ee708279dcb8527bfd435a9df; sessionid_ss=19e5fc3ee708279dcb8527bfd435a9df; sid_ucp_v1=1.0.0-KGNjZDM4OGI3OTRiZTI5NTQ1YWYwNzM0MjgyMzEwZGQzNzU4MmI2N2IKFgi-i7G-_fW1AxDTsaqVBhiwFDgIQAsaAmxmIiAxOWU1ZmMzZWU3MDgyNzlkY2I4NTI3YmZkNDM1YTlkZg; ssid_ucp_v1=1.0.0-KGNjZDM4OGI3OTRiZTI5NTQ1YWYwNzM0MjgyMzEwZGQzNzU4MmI2N2IKFgi-i7G-_fW1AxDTsaqVBhiwFDgIQAsaAmxmIiAxOWU1ZmMzZWU3MDgyNzlkY2I4NTI3YmZkNDM1YTlkZg; __tea_cookie_tokens_2608=%7B%22web_id%22%3A%227153905705379546631%22%2C%22user_unique_id%22%3A%227153905705379546631%22%2C%22timestamp%22%3A1665648478820%7D; MONITOR_WEB_ID=d2ea19a9-d510-4b83-958e-8913726cf974; _tea_utm_cache_2608={"utm_source":"gold_browser_extension"}`,
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
