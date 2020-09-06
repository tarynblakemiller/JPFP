import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects";
import SingleRobot from "./SingleRobot";
import SingleProject from "./SingleProject";
import { Home } from "./Home";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Form } from "./RobotForm";
import { Form2 } from "./ProjectForm";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/">Home</Link>
          <Link to="/robots">Robots</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/robots" component={AllRobots} />
            <Route exact path="/robots/:robotId" component={SingleRobot} />
            <Route exact path="/robot/new" component={Form} />
            <Route exact path="/projects" component={AllProjects} />
            <Route
              exact
              path="/projects/:projectId"
              component={SingleProject}
            />
            <Route exact path="/project/new" component={Form2} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
