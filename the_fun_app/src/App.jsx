import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Landing from "./Routes/Landing.jsx";
import Home from "./Routes/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Landing />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
