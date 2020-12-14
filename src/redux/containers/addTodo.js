import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

/**
 * 疑问：参数 dispatch 的由来
 * connect() 没有 mapStateToProps mapDispatchToProps 参数，不监听 store
 * dispatch 是默认传入
 * @param {*} param0 
 */
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;