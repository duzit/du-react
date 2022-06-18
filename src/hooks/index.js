import { useEffect } from "react"

const ReactHooks = (props) => {

  useEffect(() => {
    console.log('hello effect');
  }, [])

  return (
    <div>hello hooks</div>
  )
}

export default ReactHooks