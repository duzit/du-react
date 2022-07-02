import { useMemo } from "react";

export const usePow = (list = []) => {
  // return list.map(o => {
  //   console.log(1);
  //   return Math.pow(o, 2)
  // })

  // 外层使用 再次渲染时 不会重复调用
  return useMemo(() => (
    list.map(o => {
      console.log(1);
      return Math.pow(o, 2)
    })
  ), [list])
}