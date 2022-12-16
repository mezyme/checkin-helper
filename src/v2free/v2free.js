/*
 * @Author: ZhaoYue
 * @Date: 2022-12-08 16:59:20
 * @Description: 文件内容描述
 * @LastEditTime: 2022-12-16 15:49:32
 * @LastEditors: ZhaoYue
 * @FilePath: /checkin-helper/src/v2free/v2free.js
 */
// 引入axios
const axios = require("axios");

const axiosInstance = axios.create();

exports.v2CheckIn = async () => {
  try {
    console.log(`v2free 开始签到...`);
    const res = await axiosInstance({
        url: 'https://go.runba.cyou/user/checkin',
        method: "post",
        headers: {
            cookie:'__stripe_mid=3a0c014d-cf6e-4377-bb9d-0da10d777e05f56ce4; uid=94801; email=mezyme@163.com; key=60b9d57d43cbc7fa01ea69190f9569439cdf849dd155b; ip=2ad70111e73cf3fb79301925f0b84f35; expire_in=1702015381; crisp-client/session/a47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_92604e1e-8aa9-4421-891b-858fdeb2c28d'
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
    debugger
    if (res.data.ret === 1) {
      console.log(`v2free签到成功!=======> ${res.data.msg} 总流量${res.data.traffic}`);
    } else {
      console.error(`v2free签到失败!=======> ${res.data.msg}`);    
    }
  } catch (error) {
    console.error(`v2free签到失败!=======> ${error}`);
  }
};