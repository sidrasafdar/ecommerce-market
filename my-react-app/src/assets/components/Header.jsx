import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
      <div className="container">

        {/* ✅ LOGO */}
        <img src="/logo1.png" alt="logo" style={{ height: "40px" }} />

        <div className="collapse navbar-collapse justify-content-end">

          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">Shop</NavLink>
            </li>

            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">Register</NavLink>
                </li>
              </>
            )}

            {isLoggedIn && (
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-dark ms-2">
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;