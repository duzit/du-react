import React from 'react';
import {
  Button
} from 'antd';
import App from './components/app';

class HelloRedux extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.subClick = this.subClick.bind(this);
    this.addClick = this.addClick.bind(this);

    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <div>
        <h3>Hello Redux.</h3>
  
        <p>{this.state.num}</p>
        <Button onClick={this.subClick}>Sub</Button>
        <Button type="primary" onClick={this.addClick}>Add</Button>
        <App />
      </div>
    )
  }

  subClick(params) {
    console.log(params, 'sub');
  }

  addClick(params) {
    console.log(params, 'add');
  }
}

export default HelloRedux;