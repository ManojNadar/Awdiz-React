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
import Params from "./components/Params";
import UseParamsId from "./components/UseParamsId";
import Param2 from "./components/Param2";
import SingleParam from "./components/SingleParam";
import DynamicStyle from "./components/DynamicStyle";
import DynamicClasses from "./components/DynamicClasses";
import Form from "./components/Form";
import FormOnSingleState from "./components/FormOnSingleState";
import CallBackHook from "./components/CallBackHook";
import UseMemoHooks from "./components/UseMemoHooks";
import UseReducerHook from "./components/UseReducerHook";

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
        <Route exact path="/param2" element={<Param2 />} />

        <Route exact path="/singleparam/:id" element={<SingleParam />} />
        <Route exact path="/params" element={<Params />} />
        <Route exact path="/useParams/:id" element={<UseParamsId />} />
        <Route exact path="/nodep" element={<UseEffectNoDep />} />
        <Route exact path="/emptydep" element={<UseEffectEmptyDep />} />
        <Route exact path="/dynamicstyle" element={<DynamicStyle />} />
        <Route exact path="/dynamicclasses" element={<DynamicClasses />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/formsinglestate" element={<FormOnSingleState />} />
        <Route exact path="/callbackhook" element={<CallBackHook />} />

        <Route exact path="usememohook" element={<UseMemoHooks />} />
        <Route exact path="usereducerhook" element={<UseReducerHook />} />
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
