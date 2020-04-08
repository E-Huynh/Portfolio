import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Route exact path="/" component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;


