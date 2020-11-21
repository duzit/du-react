
function LogoutBtn(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}

function LoginBtn(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

export {
  LoginBtn,
  LogoutBtn
}