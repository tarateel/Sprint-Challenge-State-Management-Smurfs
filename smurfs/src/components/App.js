import React, { useEffect } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

const App = (props) => {

  useEffect(() => {
    props.getSmurfs()
  }, []) // dependency array indicated by brackets... tells useEffect when to use its callback func... empty so it only runs once

  // componentDidMount() {
  //   this.props.getSmurfs();
  // }

  // render() {
    return (
      <div className="App">
        <div className="Smurfs">
          <SmurfList smurfs={ props.smurfs } />
          <SmurfForm />
        </div>
      </div>
    );
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
