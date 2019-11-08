import React from "react";

const Smurfs = props => {
    console.log(props);
    return (
        <div className="Smurfs">
            {props.smurfs.map(smurf => (
                <div id={smurf.id} key={smurf.id}>
                    <span>
                        <h3>{smurf.name}</h3>
                        <strong>{smurf.age} smurf years old</strong>
                        <strong>{smurf.height} cm tall</strong>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Smurfs;