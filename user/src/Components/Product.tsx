import React,{useContext} from "react";
import { rootContext, rootContextType, useMyContext } from "../Context/Provider";
import { productType } from "./Home";

type propsType = {
  product: productType;
};

const Product = ({ product }: propsType) => {

  const context = useContext(rootContext);

  let arr = [];
  for (let index: number = 0; index < product.rating; index++) {
    arr.push(index);
  }
  const stars = arr.map((i, index) => {
    return <h6 key={i}>⭐</h6>;
  });

  const handleAddProduct = () => {
    context?.dispatch({type:"Add",payload:product})
  }

  return (
    <div className="flex flex-col bg-gray-100 p-[10px] m-[10px]">
      <img src={product.image} alt="" className="w-[200px] h-[200px]" />
      <h3 className="my-1">{product.title}</h3>
      <div className="flex flex-row flex-no-wrap justify-between items-cente my-2">
        <h5>
          $<strong>{product.price}</strong>
        </h5>
        <div className="flex">{stars}</div>
      </div>
      <button className="bg-yellow-500 p-1 my-2 rounded-[20px]" onClick={handleAddProduct}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
