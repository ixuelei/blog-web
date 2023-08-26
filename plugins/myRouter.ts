/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-08-16 15:15:22
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-17 10:26:02
 * @Description:
 */
// 监听路由变化

/**
 * 找同级菜单
 * @param {*} data 数据源
 * @param {*} code id字段 默认 'id'
 */
function BnSameColumn(data: any, code: any) {
  const arr: any = []
  let parentId = ''
  // 找父级id
  for (const obj of data) {
    if (obj.easyName === code) {
      parentId = obj.parentId
      break
    }
  }
  // 找父级id相同的菜单
  for (const d of data) {
    if (d.parentId === parentId) {
      arr.push(d)
    }
  }
  return arr
}
/**
 * 面包屑
 * @param {*} data 数据源
 * @param {*} easyName
 */
function BnCrumbColumn(data: any, easyName: any) {
  easyName = easyName || 'sy'
  const levelArr: any = []
  // 找到父id
  for (const obj of data) {
    if (obj.easyName === easyName) {
      levelArr.unshift(obj)
      crumbColumn(obj.parentId)
      break
    }
  }

  function crumbColumn(parentId: any) {
    for (const obj of data) {
      if (obj.id === Number(parentId)) {
        levelArr.unshift(obj)
        if (obj.parentId) {
          crumbColumn(obj.parentId)
        }
        break
      }
    }
  }
  return levelArr
}

export default defineNuxtPlugin(async (NuxtApp: any) => {
  // 路由信息
  const route = useRoute()
  console.log(NuxtApp._route, route, 'app')
  const bnColumn = useStore.bnColumn()
  // 请求全部菜单
  await bnColumn.getColumn()
  const { column, crumbColumn, twoColumn } = storeToRefs(bnColumn)
  // 面包屑
  crumbColumn.value = await BnCrumbColumn(column.value, route.params.channel_code)
  // 找同级 Gavin：多级考虑
  // sameColumn.value = await BnSameColumn(column.value, route.params.channel_code)
  twoColumn.value = await BnSameColumn(column.value, route.params.channel_code)

  // 监听路由变化 每次跳转更新相关数据
  watch(
    () => route.fullPath,
    async (newVal: any, _oldVal: any) => {
      // 面包屑
      crumbColumn.value = await BnCrumbColumn(column.value, route.params.channel_code)
      // 找同级 Gavin:多级考虑
      // sameColumn.value = await BnSameColumn(column.value, route.params.channel_code)
      // 找二级栏目
      twoColumn.value = await BnSameColumn(column.value, route.params.channel_code)

      console.log('路由1', newVal)
    }
  )
})
