
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO': 
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complated: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(item =>
        (item.id === action.id) 
          ? { ...item, complated: !item.complated }
          : item
      );
    default: 
      return state;
  }
}

export default todos;