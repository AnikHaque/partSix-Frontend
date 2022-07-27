import React from "react";
import { Link, Outlet } from "react-router-dom";

function Test() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/test/search"> Search </Link>
        <Link to="/test/list"> List </Link>
        <Link to="/test/add"> Add </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Test;