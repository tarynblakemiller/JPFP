import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects";
import SingleRobot from "./SingleRobot";
import SingleProject from "./SingleProject";
import { Home } from "./Home";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/">Home</Link>
          <Link to="/robots">All Robots</Link>
          <Link to="/projects">All Projects</Link>
        </nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/robots" component={AllRobots} />
            <Route exact path="/projects" component={AllProjects} />
            <Route exact path="/robots/:robotId" component={SingleRobot} />
            <Route
              exact
              path="/projects/:projectId"
              component={SingleProject}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;

//setting the Allrobots component here and its route
