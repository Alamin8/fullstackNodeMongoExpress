import React, { useContext } from "react";
import Sidebar from "./partials/sidebar/Sidebar.jsx";
import Navbar from "./partials/navbar/Navbar.jsx";
import AuthenticationRoute from "./AuthenticationRoute.js";
import AdminRoute from "./AdminRoute.js";
import { GlobalState } from "../../GlobalState";

const Pages = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  console.log(isLogged);
  return (
    <>
      {isLogged ? (
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <AdminRoute />
          </div>
        </div>
      ) : (
        <AuthenticationRoute />
      )}
    </>
  );
};

export default Pages;
