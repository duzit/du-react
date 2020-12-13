import { combineReducers } from 'redux';
import todos from './todo';
import Filter from './filter';

const todoApp = combineReducers(
  todos,
  Filter
)

export default todoApp;