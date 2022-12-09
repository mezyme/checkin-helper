/*
 * @Author: ZhaoYue
 * @Date: 2022-12-08 16:59:20
 * @Description: 文件内容描述
 * @LastEditTime: 2022-12-09 16:14:28
 * @LastEditors: ZhaoYue
 * @FilePath: /checkin-helper/src/v2free/v2free.js
 */
// 引入axios
const axios = require("axios");

const axiosInstance = axios.create();

exports.v2CheckIn = async () => {
  try {
    console.log(`v2free 开始签到...`);
    const data = await axiosInstance({
        url: 'http://sentry.chj.cloud/api/0/organizations/lixiang/user-teams/',
        method: "get",
        headers: {
            cookie: 'sentrysid=.eJxVkEtOw0AMhtPSBy0thQIXYNUNUQeaR9m1CCoW7A2baDIZkiEhI2eSFpAqcTYOwBpxAzacgUmEBN1Y9vfbv2W_1tdojKBrGEbOVc6kjAXHGrQ0WMks5gHWq8JLZco4bkFPF0vLvrjKbvi1Qxg2oF_qtMgjr1A880SATahpZmELhpuaT1nM0wDbcKwFxdM8ezaLXCTKLJvMy0cqkpnO5r-N2zDYdIioirADI02ZM3WZ71Juc8cd-1RHQpwJo-yUWI5F7HuXWjYbYxca5bYikLhTHTC5hak_W4zPyN0Ke9WK4IGmofQSHQsacuxDU9OX6ISluAvtcl5JT50THKxxD-rlxxTuL2Yfn29f3-9zBR2NKMvFksssxGE1k4gnoR3xoFL_3A__uR8V5g-6EW_s:1p3XeK:bZOUA642XsemgjeiefSSgQKkiM0; expires=Fri, 23 Dec 2022 07:18:24 GMT; HttpOnly; Max-Age=1209600; Path=/'
        }
    });
    // const data = {
    //     "msg": "获得了 441MB 流量.",
    //     "unflowtraffic": 2400190464,
    //     "traffic": "2.24GB",
    //     "trafficInfo": {
    //         "todayUsedTraffic": "4.78KB",
    //         "lastUsedTraffic": "623.98MB",
    //         "unUsedTraffic": "1.63GB"
    //     },
    //     "ret": 1
    // }
    // const data = {
    //     "ret": 0,
    //     "msg": "您似乎已经签到过了..."
    // }
    if (!data.ret) {
        console.error(`v2free签到失败!=======> ${data.msg}`);    
    } else {
    console.log(`v2free签到成功!=======> ${data.msg},总流量${data.traffic}`);
    }
  } catch (error) {
    console.error(`v2free签到失败!=======> ${error}`);
  }
};