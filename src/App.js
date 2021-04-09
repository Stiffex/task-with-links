import {Link} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
      <div className="app container-fluid">
          <div className="container">
              <Header />
              <Content />
              <Footer />
          </div>
      </div>
  );
}

export default App;
