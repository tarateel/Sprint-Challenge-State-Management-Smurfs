import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <div className="Smurfs">
          <SmurfList smurfs={ this.props.smurfs } />
          <SmurfForm />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs})(App);
