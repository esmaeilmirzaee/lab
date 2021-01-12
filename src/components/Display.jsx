import React from 'react';
import { connect } from 'react-redux';

class Display extends React.Component {
  render() {
    return (
      <>
        <h1>I want to display just a piece of information</h1>
        <h3>Name is {this.props.name}</h3>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(Display);
