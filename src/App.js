import React from 'react';
import NavBar from './components/layout/NavBar';
import PortfolioContainer from './components/pages/portfolioContainer';
import ProjectContainer from './components/pages/projectContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/portfolio" component={PortfolioContainer} />
        <Route exact path="/projects" component={ProjectContainer} />
      </div>
    </Router>
  );
}

export default App;


