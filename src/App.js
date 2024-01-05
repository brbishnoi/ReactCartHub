import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Protected from "./Components/Protected";
import Cart from "./Components/Cart";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/cart" element={<Protected Component={Cart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
