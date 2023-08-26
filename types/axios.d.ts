/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-01-11 16:11:11
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-18 11:36:55
 * @Description:
 */

export interface IResult<T = any> {
  msg: String
  code: Number
  data: T
}
