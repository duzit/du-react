
const Filter = (state = 'SHOW_ALL', action) => {
  const type = action.type;

  switch(type) {
    case 'SET_FILTER':
      return action.filter;
    default: 
      return state;
  }
}

export default Filter;