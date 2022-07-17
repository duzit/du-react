import React from 'react'

const JSX = () => {

  function Repeat(props: any) {
    let items = [];
    for (let index: number = 0; index < props.times; index++) {
      /* @ts-ignore */
      items.push(props?.children(index));
    }

    return <div>{items}</div>
  }
  
  return (
    <>
      <div>123</div>
      <Repeat times={10}>
        {
          (index: number) => <div key={index}> hello {index}</div>
        }
      </Repeat>
    </>
  )
}

export default JSX;