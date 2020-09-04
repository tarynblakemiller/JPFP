import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}

// <h1>
//   Welcome to StackBot Project Management: your robot employees are awaiting
//   assignments!
// </h1>;
// <p>This seems like a nice place to get started with some Routes!</p>
