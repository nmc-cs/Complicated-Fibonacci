import React from "react";
import { Link } from "ract-router-dom";

export default () => {
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
