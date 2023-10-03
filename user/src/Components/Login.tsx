import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-3xl my-4">Login</h3>
      <div className="flex flex-col flex-no-wrap justify-center items-center bg-gray-300 p-4">
        <div className="flex flex-col flex-no-wrap justify-start w-[280px] my-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="h-[40px] px-2"
          />
        </div>
        <div className="flex flex-col flex-no-wrap justify-start w-[280px] my-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="h-[40px] px-2"
          />
        </div>

        <button type="submit" className="bg-yellow-500 p-2 my-2">
          Login
        </button>
        <Link to="/register">
          <p>Dont have Account ? Register</p>
        </Link>
      </div>
    </form>
  );
}

export default Login