/*
 * @Author: WannTonn
 * @Date: 2021-05-23 08:56:12
 * @LastEditTime: 2021-05-23 09:01:48
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/utils/utils.ts
 */
// 科学防抖
export function debounce (func: any,wait: any,immediate: any) {
  let timeout: number | null,args: null,context: null,timestamp: number,result: any;

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if(last < wait && last > 0) {
      timeout = setTimeout(later,wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if(!immediate) {
        result = func.apply(context,args);
        if(!timeout) context = args = null;
      }
    }
  };

  return function(...args: any) {
    // let context = this;
    let context;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if(!timeout) timeout = setTimeout(later,wait);
    if(callNow) {
      result = func.apply(context,args);
      context = args = null;
    }

    return result;
  };
}