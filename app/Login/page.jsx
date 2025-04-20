"use client";
import { useState } from "react";

const LoginPage = () => {

      <div>
        <div>
          <div>
            <h1>Welcome to Madiba Logistics</h1>
            <p>Please Login/ Register to continue</p>
          </div>
          <form className="loginForm">
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <p>Already Have An Account</p>
            <button type="submit">Login</button>
            <p>Don't Have An Account</p>
            <a href="/register">Register</a>
            <ul>
              <li><a href="#" target="_blank"></a></li>
              <li><a href="#" target="_blank"></a></li>
              <li><a href="#" target="_blank"></a></li>
            </ul>
          </form>
        </div>
      </div>
};

export default LoginPage;
