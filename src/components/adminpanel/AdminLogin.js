import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="admin-login m-auto text-center">
      
      <div class="uf-form-signin">
        <div class="text-center">
          <Link href="https://uifresh.net/">
            <img
              src="./assets/images/logo-fb.png"
              alt=""
              width="100"
              height="100"
            />
          </Link>
          <h1 class="text-white h3">Account Login</h1>
        </div>
        <form class="mt-4">
          <div class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text fa fa-user"></span>
            <input
              type="text"
              class="form-control"
              placeholder="Username or Email address"
            />
          </div>
          <div class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text fa fa-lock"></span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="d-grid mb-4 mt-3">
            <button type="submit" class="btn uf-btn-primary btn-lg">
              Login
            </button>
          </div>
          </form>
         
      </div>
    </div>
  );
};

export default AdminLogin;
