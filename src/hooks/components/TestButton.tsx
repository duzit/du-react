import React from "react";

const TestButton = React.memo(({ title, onClick }: any) => {
  console.log(title, 'TestButton');
  
  return (
    <button onClick={onClick}>{title}</button>
  )
})

export default TestButton