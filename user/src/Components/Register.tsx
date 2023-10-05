import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config';

type registerType = {
  name : string;
  email : string;
  password : string;
}

const Register = () => {
  const [user , setUser] = useState<registerType>({name:"",email:"",password:""});
  const navigate = useNavigate();

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user , [name]:value});
  }

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={submitHandler}
    >
      <h3 className="font-bold text-3xl my-4">Register</h3>
      <div className="flex flex-col flex-no-wrap justify-center items-center bg-gray-300 p-4">
        <div className="flex flex-col flex-no-wrap justify-start w-[280px] my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-[40px] px-2"
            value={user.name}
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col flex-no-wrap justify-start w-[280px] my-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="h-[40px] px-2"
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col flex-no-wrap justify-start w-[280px] my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-[40px] px-2"
            value={user.password}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="bg-yellow-500 p-2 my-2">
          Register
        </button>
      </div>
    </form>
  );
}

export default Register