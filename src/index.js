import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';

// import App from './App';
// import Hello from './hello';
// import Clock from './Clock/clock';
// import LoginoutControl from './loginInOut/control';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Hello msg="hello props." />
//     <Clock des="clock props." />
//     <LoginoutControl />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import Setup from './setup/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoList from './redux/reducers';

let store = createStore(todoList);

ReactDOM.render(
  <Provider store={store}>
    <Setup />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
