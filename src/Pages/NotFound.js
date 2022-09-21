import React from "react";
import { Link } from "react-router-dom";
import { Notfound } from "./Styles";

function NotFound() {
  return (
    <Notfound className="d-flex justify-content-center align-items-center h-100">
      <h2>OPPPS!!! I think you are lost. Please return to the homepage</h2>
      <Link to="/">RETURN HOME</Link>
    </Notfound>
  );
}

export default NotFound;
