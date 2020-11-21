import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 123);
    // 1. 需显式地通过 setState 修改 state
    // 2. state 更新可能是异步的
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
    // 3. state 的更新会被合并
    this.state = {
      date: new Date()
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.timer 是不参与数据流的额外字段
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  // 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault
  exampleEvent(e) {
    e.preventDefault();
  }

  handleClick() {

  }

  // 绑定 this 方法
  // handleClick = () => {

  // }

  click1(type, e) {
    console.log(type, e, 'arrow');
  }

  // 默认第二个参数是 e
  click2(type, e) {
    console.log(type, e, 'bind');
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
        {/* 如果在构造函数中已经 bind 则这里可以直接使用 */}
        <button onClick={this.handleClick}>Click me</button>
        {/* 绑定 this 方法
        <button onClick={() => this.handleClick()}>Click me</button> */}

        {/* 没有在构造函数中 bind 这里需特殊处理一下 只用箭头函数或者 bind 一下 */}
        {/* 传参 箭头函数需要显式的传递 e，bind 不需要，默认第二个参数是 e */}
        <button onClick={(e) => this.click1('arrow click', e)}>箭头函数Click</button>
        <button onClick={this.click2.bind(this, 'bind click')}>bindClick</button>

        <h3>{`props: ${this.props.des}`}</h3>
      </div>
    );
  }
}

export default Clock;