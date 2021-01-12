import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Editor from './Editor';
import Display from './Display';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <Router>
        <h6>{this.props.name}</h6>
        <Route path='/display'>
          <Display />
        </Route>
        <Route path='/editor'>
          <Editor />
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.name);
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(App);
