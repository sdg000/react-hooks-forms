import React from "react";

//state variables with initial values set
function DisplayData({firstName, lastName}) {
 
  
  return (
    <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
    </div>
  );
}

export default DisplayData;
