import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Routes/Landing.jsx";
import Signup from "./Routes/Register.jsx";
import AniCards from "./Routes/AniCards.jsx";
import Header from "./components/Header.jsx";
import AniQuotes from "./Routes/AniQuotes.jsx";
import Login from "./Routes/Login.jsx";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path={"/"} element={<Landing />}></Route>
          <Route path={"/register"} element={<Signup />}></Route>
          <Route path={"/ani_cards"} element={<AniCards />}></Route>
          <Route path={"/ani_quotes"} element={<AniQuotes />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
