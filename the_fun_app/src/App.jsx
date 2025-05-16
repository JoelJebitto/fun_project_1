import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Routes/Landing.jsx";
import Home from "./Routes/Home.jsx";
import Signup from "./Routes/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Landing />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
