import React from 'react';
import Todo from './todo';

/**
 * 参数解析
 * todos 是 mapStateToProps 传入
 * onTodoClick 是 mapDispatchToProps 传入
 * @param {*} param0 
 */
const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))
    }
  </ul>
)

export default TodoList;