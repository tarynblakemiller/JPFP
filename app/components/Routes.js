import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AllRobots } from "./AllRobots";
import { AllProjects } from "./AllProjects";

//imported Link, and Route here now

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/robots">All Robots</Link>
          <Link to="/projects">All Projects</Link>
        </nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <AllRobots />
        <Route exact path="/robots" component={AllRobots} />
        <AllProjects />
        <Route exact path="/projects" component={AllProjects} />
      </div>
    </Router>
  );
};

export default Routes;

//setting the Allrobots component here and its route
