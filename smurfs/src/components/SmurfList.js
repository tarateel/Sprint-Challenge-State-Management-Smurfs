import React from "react";

const SmurfList = (props) => {
    console.log(props, "line 4");
    
    return(
        <div className="smurf-list">
        { props.smurfs.map ( smurf => (
                <div id={smurf.id} key={smurf.id}>
                    <div>
                    <p> {smurf.name} </p>
                    <p> {smurf.age} </p>
                    <p> {smurf.height} </p>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

 
  export default SmurfList;