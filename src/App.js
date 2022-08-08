import './App.css';

import React, { useState } from "react";


function App() {
const [fullName, setFullname] = useState({
  fName: "",
  lName: "",
  email: ""
});

function handleChange(event) {
const { value, name } = event.target;

setFullname(prevValue => {
  if (name === "fName") {
    return {
      fName: value,
   lName: fullName.lName,
   email: fullName.email
    }; 
  } else if (name === "lName") {  
    return {   
       fName: fullName.fName,
      lName: value,
      email: fullName.email
    };
    } else return {   
         fName: fullName.fName,
        lName: fullName.lName,
        email: value
  }
})

   
  }


return (
  <div className="container">
    <h1>
      Hello {fullName.fName} {fullName.lName}
    </h1>
    <p> {fullName.email} </p>
    <form>
      <input
        onChange={handleChange}
        name="fName"
        placeholder="First Name"
        value={fullName.fName}
      />
      <input
        onChange={handleChange}
        name="lName"
        placeholder="Last Name"
        value={fullName.lName}
      />
<input 
onChange={handleChange}
name="email" 
placeholder="Email" 
value={fullName.email}
/>
        <button> Submit </button>
      </form>
    </div>
  );
}

export default App;
