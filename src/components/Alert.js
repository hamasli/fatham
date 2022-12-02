import React from 'react'

export default function alert(props) {
 const capitali=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
 }
    return (
    // it means props.alert is not null then remaing div will runs.
    // it will not run remaing execution if the  props.alert is null.
      props.alert &&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong> {capitali(props.alert.type)}</strong> &nbsp; &nbsp; {props.alert.msg} 
    
  </div>
  )
}
