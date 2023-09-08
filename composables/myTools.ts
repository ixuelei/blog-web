/*
 * @Author: Gavin xl@ckcck.com
 * @Date: 2023-09-08 15:41:28
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-08 15:42:12
 * @Description:
 */
export const handleViteImages = (imgPath: string) => {
  try {
    const getSplit = imgPath.split("/");
    const getName = getSplit[getSplit.length - 1];
    return new URL(`../static/images/${getName}`, import.meta.url).href;
  } catch (error) {
    console.warn(error);
  }
};
