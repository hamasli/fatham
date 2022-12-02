import "./App.css";
import Hello from "./components/Hello";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link

// } from "react-router-dom";
import Prac from "./components/Prac";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";

//import TRANS from './components/TRANS';

function App() {
  // for application mode
  const [Mode, setMode] = useState(() => {
    console.log("light");

    return "dark";
  });
  const [alert,setAlert]=useState(()=>null);
  const showAlert=(message,typ)=>{
    setAlert({
      msg:message,
      type:typ,
    })
    setTimeout(() => {
      setAlert(()=>null);
    }, 1500);
  }
  // for alert
  // const[alert,setAlert]=useState(()=>null);
  // const showAlert=(message,type)=>{
  //    setAlert({
  //     msg:message,
  //     type:type,
  //    })
  //    setTimeout(() => {
  //     setAlert(null);
  //    }, 4000);
  // }
  const toogleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode is now enabled ","success");
    document.title="DARK mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is now enabled ","success");
      document.title="light";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Hello title="TextUtils" Mode={Mode} tooglMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <TRANS heading="Enter the details"/> */}
        {/* <Routes>
          <Route path="/about" element={<About/>}/>
          
          <Route path="/" element={<Prac heading="ENTER ABOUT YOU" Mode={Mode} showAlert={showAlert} />}/>
        </Routes> */}
        <Prac heading="ENTER ABOUT YOU" Mode={Mode} showAlert={showAlert} />
      {/* </div> */}
     {/* </Router> */}
       </div> 
    </>
  );
}

export default App;
