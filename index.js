/*
 * @Author: ZhaoYue
 * @Date: 2022-10-27 15:10:15
 * @Description: 文件内容描述
 * @LastEditTime: 2023-03-20 17:35:36
 * @LastEditors: ZhaoYue
 * @FilePath: /checkin-helper/index.js
 */

// 定时服务
const schedule = require("node-schedule");
// 掘金签到
const juejin = require("./src/juejin/juejin");
// 引入dayjs
var dayjs = require("dayjs");
// 引入v2free签到
const v2free = require("./src/v2free/v2free")

/**
 * 以下是定时器示例
    每分钟的第30秒触发： '30 * * * * *'
    每小时的1分30秒触发 ：'30 1 * * * *'
    每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
    每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
    2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
    每周1的1点1分30秒触发 ：'30 1 1 * * 1'
 */

// 每天8：10分执行任务 掘金签到
schedule.scheduleJob("0 10 8 * * *", () => {
   const nowTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
   console.log(`
   ========== 现在时间: ${nowTime} ==========`);
   // juejin.juejinCheckIn();
   v2free.v2CheckIn();
});

// 直接运行一次
// juejin.juejinCheckIn();
v2free.v2CheckIn();