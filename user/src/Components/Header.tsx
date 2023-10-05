import React, { useContext } from 'react'
import {BsShop} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill } from "react-icons/bs";
import {BsFillCartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import { rootContext } from '../Context/Provider';
 
const Header = () => {
  const context = useContext(rootContext);

  return (
    <div className="w-[100%] h-auto bg-gray-900 flex flex-row flex-wrap justify-between items-center">
      <Link to="/">
        <div className="flex flex-row flex-no-wrap justify-center items-center p-[20px]  text-white">
          <BsShop size="40px" className="mx-2 " />
          <h2 className="text-2xl font-bold mx-2 ">eShop</h2>
        </div>
      </Link>
      <div className="flex grow flex-row flex-no-wrap justify-center items-center px-[20px] py-[5px]">
        <input type="text" className="w-[100%] h-[40px]" />
        <AiOutlineSearch className="bg-yellow-500 px-1" size="40px" />
      </div>
      <div className="flex flex-row flex-no-wrap justify-center items-center p-[20px]  text-white">
        <Link to="/checkout">
          <BsFillCartFill size="40px" className="mx-2 relative"></BsFillCartFill>
          <span className="absolute top-2 right-20 px-2 py-1 translate-x-1/2 bg-red-500 border border-white rounded-full text-xs text-white">
            {context?.state.products.length}
          </span>
        </Link>
        <Link to="/login">
          <BsFillPersonFill size="40px" className="mx-2" />
        </Link>
      </div>
    </div>
  );
}

export default Header