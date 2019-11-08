import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
//smurfObj is the current state, setSmurfObj ONLY sets the smurfObj state
function SmurfForm(props) {
  const [smurfObj, setSmurfObj] = useState(
    {
      name: ' ',
      age: ' ',
      height: ' '
  })

const handleInputChange = event => {
  setSmurfObj({
      ...smurfObj,
      [event.target.name]: event.target.value
  });
};

const handleAddSmurf = event => {
  event.preventDefault();
  props.addSmurf(smurfObj);
  setSmurfObj({ name: '', age: '', height: '' });
};

  return (
    <form className="add-smurf-form" onSubmit={handleAddSmurf}>
      <input
        className="input"
        value={smurfObj.name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={smurfObj.age}
        name="age"
        type="text"
        placeholder="Age"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={smurfObj.height}
        name="height"
        type="text"
        placeholder="height in cm"
        onChange={handleInputChange}
      />
      <button type="submit">
        Add New Smurf
      </button>
    </form>
  );
}


// class SmurfForm extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: ' ',
//             age: ' ',
//             height: ' '
//         }
//     }

//   handleInputChange = event => {
//     this.setState({
//         ...this.state,
//         [event.target.name]: event.target.value
//     });
//   };

//   handleAddSmurf = event => {
//     event.preventDefault();
//     const { name, age, height } = this.state;
//     this.props.addSmurf({ name, age, height });
//     this.setState({ name: '', age: '', height: '' });
//   };

//   render(){
//     return (
//       <form className="add-smurf-form" onSubmit={this.handleAddSmurf}>
//         <input
//           className="input"
//           value={this.state.name}
//           name="name"
//           type="text"
//           placeholder="Name"
//           onChange={this.handleInputChange}
//         />
//         <input
//           className="input"
//           value={this.state.age}
//           name="age"
//           type="text"
//           placeholder="Age"
//           onChange={this.handleInputChange}
//         />
//         <input
//           className="input"
//           value={this.state.height}
//           name="height"
//           type="text"
//           placeholder="height in cm"
//           onChange={this.handleInputChange}
//         />
//         <button type="submit">
//           Add New Smurf
//         </button>
//       </form>
//     );
//   }
// }

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

export default connect(
    mapStateToProps,
    { addSmurf })(SmurfForm);