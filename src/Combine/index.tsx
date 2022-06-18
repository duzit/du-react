import React from 'react';

const HelloYou = (props: any) => {
  const { name } = props;
  return (
    <div>
      { name }
      { props.children }
    </div>
  )
}

const SplitPanel = (props: any) => {

  return (
    <div>
      { props.left }
      { ' hfksahfjgs' }
      { props.right }
    </div>
  )

}

// 
const Left = () => {
  return (
    <div>left 1111</div>
  )
}

const Right = () => {
  return (
    <div>right 2222</div>
  )
}

const Combine = () => {
  return (
    <>
      <HelloYou name="John">
        {/* children */}
        <p>Hello John</p>
      </HelloYou>
      <SplitPanel left={<Left />} right={<Right />} />
    </>
  )
}

export default Combine;