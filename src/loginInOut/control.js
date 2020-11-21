import React from 'react';
import {
  LoginBtn,
  LogoutBtn
} from './loginout.js'
import Greeting from './greeting.js'

class loginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {
      isLoginIn: false
    };
  }

  handleLogoutClick() {
    this.setState({
      isLoginIn: false
    })
  }

  handleLoginClick() {
    this.setState({
      isLoginIn: true
    })
  }
 
  render() {
    const isLogin = this.state.isLoginIn;
    let button;

    if (isLogin) {
      button = <LogoutBtn onClick={this.handleLogoutClick} />
    } else {
      button = <LoginBtn onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLogin={isLogin} />
        {button}
      </div>
    );
  }
}

export default loginControl;