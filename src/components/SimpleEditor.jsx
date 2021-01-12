import React from 'react';

const SimpleEditor = (props) => {
  console.log(props);
  const handleOnSetName = (evt) => props.onSetName(evt.target.value);
  return (
    <>
      <h5>This is simple editor</h5>
      <input onChange={handleOnSetName} />
    </>
  );
};

export default SimpleEditor;
