import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [id, setId] = useState(1);

  // const hdlChange = (e) => {
  //   console.log("hdlChange ", e.target.value, "Before setId = ", Id);
  //   setId(e.target.value);
  //   console.log("After hdlChange", e.target.value, "id = ", id);
  //   navigate(`/product/${e.target.value}`);
  // };

  return (
    <div style={{ display: "flex", gap: "100px", alignItems: "baseline" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Logo
      </h2>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/private">Private</Link>
        <Link to={`/product/${id}`}>Product by Id</Link>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            console.log("After hdlChange", e.target.value, "id = ", id);
            navigate(`/product/${e.target.value}`);
          }}
        />
        <div>{id}</div>
      </nav>
      <p>current page: {location.pathname}</p>
      {/* <h2>Home + Nav</h2> */}
    </div>
  );
}

export default Header;
