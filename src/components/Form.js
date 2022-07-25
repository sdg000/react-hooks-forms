import React from "react";

//state variables with initial values set
function Form({firstName, lastName, changeFirstName, changeLastName}) {
 
  
  return (
    <form>
      <input type="text" onChange={changeFirstName} value={firstName} />
      <input type="text" onChange={changeLastName} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
