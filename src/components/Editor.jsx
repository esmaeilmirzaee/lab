import React from 'react';
import { connect } from 'react-redux';

import { dispatchName } from '../store/actions';

class Editor extends React.Component {
  render() {
    return (
      <>
        <h3>Editor: Let's practise</h3>
        <input
          onChange={(evt) => {
            const value = evt.target.value;
            this.props.dispatchName(value);
          }}
        />
        <p>{this.props.name}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps, { dispatchName })(Editor);
