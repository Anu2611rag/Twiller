import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home/> }/>
          </Routes>

 
    </div>
  )
}
export default App;