export const dispatchName = (value) => {
  console.log(value);
  return { type: 'SET_NAME', payload: { name: value } };
};
