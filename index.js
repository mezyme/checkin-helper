/*
 * @Author: ZhaoYue
 * @Date: 2022-10-27 15:10:15
 * @Description: 文件内容描述
 * @LastEditTime: 2023-01-31 09:13:11
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
// schedule.scheduleJob("0 10 8 * * *", () => {
//    const nowTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
//    console.log(`
//    ========== 现在时间: ${nowTime} ==========`);
//    juejin.juejinCheckIn();
//    v2free.v2CheckIn();
// });

// 直接运行一次
// juejin.juejinCheckIn();
// v2free.v2CheckIn();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://juejin.cn/');

//   // Set screen size
  await page.setViewport({width: 1400, height: 1200});

  const loginElement = await page.waitForSelector('.login-button');
  await loginElement.click();
  const githubLogin = await page.waitForSelector('[title=GitHub]');
  await githubLogin.click();
  await page.waitForTimeout(6 * 1000);
  const githubLoginPage = ( await browser.pages() )[2];//得到所有窗口使用列表索引得到新的窗口
  // const newGithubLoginWindow = await browser.waitForTarget(
  // target => target.url().includes('https://github.com/login'));
  // const newPage = await newGithubLoginWindow;
  await githubLoginPage.type('#login_field', 'mezyme@163.com');
  await githubLoginPage.type('#password', '860926yue');
  const githubloginElement = await githubLoginPage.waitForSelector('.js-sign-in-button');
  await githubloginElement.click();
  await page.waitForTimeout(10 * 1000);
  // 去签到按钮
  const checkInBtn = await page.waitForSelector('.signin-btn');
  console.log('checkInBtn', checkInBtn);
  await checkInBtn.click();
  await page.waitForTimeout(3 * 1000);
  const checkInNowBtn = await page.waitForSelector('.signin.btn');
  console.log('checkInNowBtn', checkInNowBtn);
  await checkInNowBtn.click();
  await page.waitForTimeout(3 * 1000);
  const chouJiangBtn = await page.waitForSelector('.btn-area .btn');
  console.log('chouJiangBtn', chouJiangBtn);
  await chouJiangBtn.click();

//   // Type into search box
//   await page.type('.search-box__input', 'automate beyond recorder');

//   // Wait and click on first result
//   const searchResultSelector = '.search-box__link';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Localte the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Customize and automate'
//   );
//   const fullTitle = await textSelector.evaluate(el => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
})();