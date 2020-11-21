
function Greeting(props) {
  if (props.isLogin) {
    return <h1>Welcome back.</h1>;
  } 
  return <h1>Please sign up.</h1>;
}

export default Greeting;