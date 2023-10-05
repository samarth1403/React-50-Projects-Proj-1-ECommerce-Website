import React,{useContext} from 'react'
import { rootContext } from '../Context/Provider';
import { productType } from './Home';

const Checkout = () => {
  const context = useContext(rootContext)!;

  const productsInCart = context?.state.products.map((product,index)=>{
      return (
        <div key={product.id} className="bg-gray-300 p-[20px] flex flex-row flex-wrap justify-between items-start">
          <img
            src={product.image}
            alt=""
            className="w-[130px] h-[130px]"
          />
          <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <button className="bg-red-400 p-2 my-1" onClick={()=>removeProductHandler(product)}>Remove</button>
        </div>
      );
  });

  const removeProductHandler = (product:productType) => {
    context?.dispatch({ type: "Remove", payload: product });
  };

  const cartLength = context?.state.products.length;

  return (
    <div className="flex flex-row flex-wrap justify-evenly items-start">
      {
        cartLength > 0 ? <div className="flex flex-col flex-wrap my-4 sm:w-[320px] md:w-[500px] lg:w-[700px]">
       { productsInCart }
      </div> : <p>No Products in Cart</p>
      }
      <div className="my-4 bg-gray-400 p-[10px]">
        <h2 className="my-2 text-center font-bold text-2xl">Total Amount</h2>
        <div className="flex flex-col justify-center flex-no-wrap items-center">
          <p className="my-1">
            Total Products : {context?.state.products.length}
          </p>
          <p className="my-1">Amount : {context?.state.totalAmount}</p>
          <button className="bg-yellow-500 my-1 p-2">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout