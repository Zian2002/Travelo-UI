import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import Destination from "./components/pages/Destination";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Register from "./components/pages/Register";
import User from "./components/pages/User";

function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/sign-up" exact element={<Login />} />
          <Route path="/services/activity" element={<Destination />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
