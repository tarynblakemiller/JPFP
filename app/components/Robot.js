import React from "react";
import { Link } from "react-router-dom";

const Robot = (props) => {
  const { robot } = props;

  return <Link to={`/robots/${robot.id}`}></Link>;
};

export default Robot;
