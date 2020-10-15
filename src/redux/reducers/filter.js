const init = 'SHOW_ALL';

export const filter = function(state = init, action) {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}