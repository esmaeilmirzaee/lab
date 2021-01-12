export default (name, action) => {
  if (action.type === 'SET_NAME') {
    return { ...name, name: action.payload.name };
  }

  return name;
};
