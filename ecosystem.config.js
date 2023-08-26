/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-30 16:57:05
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-03-30 16:57:19
 * @Description:
 */
module.exports = {
  apps: [
    {
      name: 'cms',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}