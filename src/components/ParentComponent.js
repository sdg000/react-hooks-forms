import React, {useState} from "react";
import DisplayData from "./DisplayData";
import Form from "./Form"

function ParentComponent(){
    
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  

    //function to update {firstname - value} through onChange Event.
  function changeFirstName(e){
    setFirstName(e.target.value)
    console.log(e.target.value)
  }
  

  //function to update {Lastname - value} through onChange Event.
  function changeLastName(e){
    setLastName(e.target.value)
    console.log(e.target.value)
  }
  //console.log(lastName)

  return (
    <div>
        <Form 
        firstName={firstName} 
        lastName={lastName} 
        changeFirstName={changeFirstName} 
        changeLastName={changeLastName}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
    
  )
    //calling DisplayData is an example to prepopulate a form when they want to click.

}

export default ParentComponent