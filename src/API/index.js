import React from "react";
import styles from './index.module.less';

function MyComponent(props) {
  if (!props.children) return null;



  return props.children;
}

function Item(props) {
  return (
    <div className={styles.item}>Hello {props.name}</div>
  )
}

function Render(props) {

  return (
    <MyComponent>
      <Item name='HZ'></Item>
      <Item name='NJ'></Item>
    </MyComponent>
  );
}

export default Render;