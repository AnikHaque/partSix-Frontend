import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Test.css';
function Test() {
  return (
    <div className="products">
      <div className="productsNav text-white">
        <Link to="/test/search"> Search </Link>
        <Link to="/test/list"> List </Link>
        <Link to="/test/add"> Add </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Test;