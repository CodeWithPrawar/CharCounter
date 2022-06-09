import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.getElementById("Dark").style.display = "none";
      document.getElementById("Light").style.display = "block";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success")
    } else {
      setMode("light");
      document.getElementById("Light").style.display = "none";
      document.getElementById("Dark").style.display = "block";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success")
    }
  };
  return (
    <>
      <Navbar title="CharCounter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my3">
        <Text showAlert={showAlert} heading=" Word , Character Counter, And Remove Symbols And Extra Spaces. Try CharCounter" mode={mode} />
      </div>
      {/* <About />  */}
    </>
  );
}

export default App;
