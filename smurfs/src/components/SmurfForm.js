import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import { addSmurf } from '../actions';
// import '../styles/smurf-list-view.css';

const SmurfForm = props => {
  const [smurf, setSmurf] = useState();

  const handleChange = event => {
    setSmurf(event.target.value);
  };

  const handleAddSmurf = event => {
    event.preventDefault();
    setSmurf('');
    props.addSmurf();
  };

}

const mapStateToProps = state => {
  return {
    getSmurf: state.getSmurf,
    addSmurf: state.addSmurf,
    error: state.error
  }
}

const mapDispatchToProps = {
  getSmurf,
  addSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  { addSmurf }
)(SmurfForm);