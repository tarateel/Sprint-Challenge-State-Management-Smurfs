import React from 'react';
import Smurf from './Smurf';
import { smurfReducer } from '../reducers/smurfReducer';

const SmurfList = props => {
  return (
    <ul>
      {props.smurf.map(smurf => {
        return <Smurf
          key={smurfReducer.name}
          smurf={smurf}
        />
      })}
    </ul>
  );
};

export default SmurfList;