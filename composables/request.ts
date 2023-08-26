/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-23 15:19:21
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-18 17:21:21
 * @Description:
 */


import { merge } from 'lodash-es'

type FetchType = typeof $fetch
type ReqType = Parameters<FetchType>[0]
type FetchOptions = Parameters<FetchType>[1]

async function httpRequest<T = unknown>(
  method: any,
  url: ReqType,
  bodyOrParams?: any,
  opts?: FetchOptions,
) {
  // const token = useCookie('token')
  const router = useRouter()
  const route = useRoute()

  const defaultOpts = {
    method,
    baseURL: 'https://go.ixuelei.com',
    // headers: { token: token.value } as any,
    onRequestError() {
      console.error('请求出错，请重试！')
    },
    onResponseError({ response }) {
      switch (response.status) {
        case 400:
          console.error('参数错误')
          break
        case 401:
          console.error('没有访问权限')
          router.push(`/login?callback=${route.path}`)
          break
        case 403:
          console.error('服务器拒绝访问')
          break
        case 404:
          console.error('请求地址错误')
          break
        case 500:
          console.error('服务器故障')
          break
        default:
          console.error('网络连接故障')
          break
      }
    },
  } as FetchOptions
  if (defaultOpts) {
    if (method === 'post')
      defaultOpts.body = bodyOrParams
    else
      defaultOpts.params = bodyOrParams
  }
  return await $fetch<T>(url, merge(defaultOpts, opts))
}

export function httpPost<T = unknown>(
  request: ReqType,
  body?: any,
  opts?: FetchOptions,
) {
  return httpRequest<T>('post', request, body, opts)
}

export function httpGet<T = unknown>(
  request: ReqType,
  data?: any,
  opts?: FetchOptions,
) {
  return httpRequest<T>('get', request, data, opts)
}