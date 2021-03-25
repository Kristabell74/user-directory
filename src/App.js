import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import Wrapper from "./components/Wrapper/index.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;