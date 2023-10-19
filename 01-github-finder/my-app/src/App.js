import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import { NotFound } from "./components/pages/NotFound";
import { Home } from "./components/pages/Home";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="*" element={<NotFound></NotFound>} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
