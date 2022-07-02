import React, { useCallback, useState } from "react";
import TestButton from "./TestButton";

const MockMemo = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  // 当点击切换按钮的时候，没有经过 useCallback封装的函数会再次刷新，
  // 而进过过 useCallback包裹的函数不会被再次刷新
  const add = useCallback(() => {
    setCount(count + 1)
  }, [count])

  console.log('init');

  return (
    <div>
      <div>
        <TestButton title='普通点击' onClick={() => setCount(count + 1)}></TestButton>
        <TestButton title='useCallback 点击' onClick={add}></TestButton>
      </div>
      <div>count: {count}</div>
      <button onClick={() => {
        console.log('切换success');
        setShow(!show)
      }}>切换</button>
    </div>
  )

}

export default MockMemo;