import { useEffect, useState } from "react";
import { usePow } from './components/usePow';
import MockMemo from "./components/useCallback";

const ReactHooks = () => {
  const data = usePow([1,2,3])
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    console.log('hello effect');
  }, [])

  return (
    <>
      <div>hello hooks</div>
      <hr />
      <h2>自定义hooks</h2>
      <div>data: {JSON.stringify(data)}</div>
      <button onClick={() => setFlag(v => !v)}>Click</button>
      <div>flag: {JSON.stringify(flag)}</div>
      <hr />
      <MockMemo />
    </>
  )
}

export default ReactHooks