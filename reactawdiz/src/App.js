// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
// import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
// import IsLogged from "./components/IsLogged";
// import CounterApp from "./components/CounterApp";
import UseEffectNoDep from "./components/UseEffectNoDep";
import UseEffectEmptyDep from "./components/UseEffectEmptyDep";
// import ObjState from "./components/ObjState";
import UseEffectsingleDep from "./components/UseEffectsingleDep";
import UseEffectMultipleDep from "./components/UseEffectMultipleDep";

function App() {
  return (
    <>
      <Navbar />
      {/* <Counter /> */}

      {/* <IsLogged /> */}
      {/* <UseEffectNoDep /> */}
      {/* <ObjState /> */}
      {/* <CounterApp /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nodep" element={<UseEffectNoDep />} />
        <Route exact path="/emptydep" element={<UseEffectEmptyDep />} />
        <Route
          exact
          path="/UseEffectsingleDep"
          element={<UseEffectsingleDep />}
        />
        <Route
          exact
          path="/UseEffectMultipleDep"
          element={<UseEffectMultipleDep />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
