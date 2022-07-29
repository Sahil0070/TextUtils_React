// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils-Dark Mode";
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils-Light Mode";
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };
  return (
    <>
    {/* {console.log(setAlert)} */}
      {/* <router> */}
      {/* <BrowserRouter> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar title="TextUtils" about="AboutText" /> */}
        {/* <Navbar /> */}

        <div className="container my-3">
        <TextForm showAlert={showAlert} setAlert={setAlert} heading="Enter Text To Analyze Below" mode={mode} />
      {/* <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} setAlert={setAlert} heading="Enter Text To Analyze Below" mode={mode} />} />
        <Route path="about/*" element={<About />} />
      </Routes> */}
        </div>

    {/* </BrowserRouter> */}


      

      {/* </router> */}
    </>
  );
}

export default App;
