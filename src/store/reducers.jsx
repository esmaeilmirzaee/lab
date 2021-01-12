const initialState = (store) => {
  if (!store) {
    return { name: '' };
  } else {
    return { name: JSON.parse(localStorage.getItem('store')) };
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};
