// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
import IsLogged from "./components/IsLogged";
import CounterApp from "./components/CounterApp";

function App() {
  return (
    <>
      <Navbar />
      <Counter />

      <IsLogged />

      <CounterApp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
