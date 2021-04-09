import React from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";

function Content(props) {
    return (
        <div className="main">
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/features">
                <Features />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </div>
    );
}

export default Content;