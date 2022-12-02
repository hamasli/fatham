import React,{useState} from 'react'

export default function Prac(props) {
    const[text,settext]=useState('')
    const conUpper=()=>{
     let newText=text.toUpperCase();
     settext(newText);
     props.showAlert("Uppercase is performed","warning");

    }
    const clickONchange=(event)=>{
      settext(event.target.value);
     
    }
    const conLower=()=>{
      let newmet=text.toLowerCase();
      settext(newmet);
      props.showAlert("LowerCase is performed","success");
      
    }
    const conCop=()=>{
     var text=document.getElementById('mybox');
     text.select();
     text.setSelectRange(0,9999);
        navigator.clipboard.writeText(text.value);
       props.showAlert("you have copied successfully!!!!","warning");
    }
    const conCle=()=>{
      let newTexts=text.split(/[ ]+/);
      settext(newTexts.join(' '));
      props.showAlert("Space is removed","warning");
         
    }
  return (
    <>
    <div className='container' style={{color:props.Mode==='dark' ?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-6 ">
        <label className="form-label">Enter data</label>
        <textarea value={text}   onChange={clickONchange} style={{backgroundColor:props.Mode==='dark' ?'gray':'white', color:props.Mode==='dark' ?'white':'black'}} className="form-control"  id="mybox" rows="8"></textarea>
      </div>
      <button onClick={conUpper} className="btn btn-primary my-3">Convert to UpperCase</button>
      <button onClick={conLower} className="btn btn-dark my-3 mx-2">Convert to toLowerCase</button>
      <button onClick={conCop} className="btn btn-dark my-3 mx-2">Convert to toCOPY</button>
      <button onClick={conCle} className="btn btn-dark my-3 mx-2">Convert to to remove space</button>
    </div>
    <div className='container' style={{color:props.Mode==='dark' ?'white':'black'}}>
    
       <h1>Your text Summary</h1>

       <p>TOTAL characters ARE {text.length}   ********* WORDS ARE  {text.split(" ").length}</p>
        <h2>Time consuming for reading __________| </h2>
       <p>TIME CONUSMING IS {text.split(" ").length*0.008}</p>
       <h2>TEXT PREVIEW</h2>
       <p>{text.length>0 ?text:"Enter something to preview" }</p>
  
    </div>

    </>
  )
}
