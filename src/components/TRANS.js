import React, { useState } from "react";

export default function (props) {
  // text is a simole text, gettezt is a updated funtion.
  const[text,gettext]=useState('Enter the details');
  // text="";  //wrong way.
  // gettext();   // corerect way.
  const conUpper=(props)=>{
    console.log('upper case'+text);
     let newText=text.toUpperCase();
    gettext(newText);
    
  }
  const handleOnclick=(event)=>{
    console.log('king');
    gettext(event.target.value);
    
   
    
  }
  return (
    <div>
      <h1>{props.heading}-{text}</h1>
      <div className="mb-6 ">
        <label className="form-label">Enter data</label>
        <textarea value={text} onChange={handleOnclick} className="form-control" id="mybox" rows="8"></textarea>
      </div>
      <button onClick={conUpper} className="btn btn-primary my-2">Convert to UpperCase</button>
    </div>
  );
}
