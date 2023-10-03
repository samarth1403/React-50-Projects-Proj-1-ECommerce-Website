import React from 'react';
import Product from './Product';

export type productType = {
  readonly id : number;
  title : string;
  price : number;
  rating : number;
  image : string;
}

const products: Array<productType> = [
  {
    id: 1,
    title: "Product 1",
    price: 1,
    rating: 4,
    image:
      "https://png.pngtree.com/png-clipart/20210311/original/pngtree-cricket-bat-clipart-ball-sports-wood-png-image_6024964.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: 2,
    rating: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qaiv3nkgqocac-aSEL9lfoeVYayK1h9_tJN8qj2P4geDipWALdcEqALQKjEuHdoCWUw&usqp=CAU",
  },
  {
    id: 3,
    title: "Product 3",
    price: 3,
    rating: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOV07iAwqlALZ4jNi5Lcx-YmnWJrhUFejAUwuaLSLcGt_HaXKhM7juyMTgd-vx34YB4Y&usqp=CAU",
  },
  {
    id: 4,
    title: "Product 4",
    price: 4,
    rating: 4,
    image:
      "https://p.turbosquid.com/ts-thumb/Jv/w0LWUY/XpWnSyI8/th/jpg/1582703565/1920x1080/fit_q87/48b7ed907076e989f493b8cd44d8d9629ace4602/th.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    price: 5,
    rating: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcM8mgmzmduYayxo7E7mmrwP9_hoog4rnrIz_QvtSImV-BXlE299dNkwVDB_7GjBmwnQ0&usqp=CAU",
  },
];

const productsList = products.map((product,index)=>{
  return <Product key={product.id} product={product}/>
})

const Home = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
       {productsList}
    </div>
  )
}

export default Home