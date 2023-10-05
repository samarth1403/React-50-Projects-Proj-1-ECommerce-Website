import { createContext, Dispatch, ReactNode, useReducer, useContext , useEffect } from "react";
import { productType } from "../Components/Home";

export type rootContextType = {
  state:stateType,
  dispatch: Dispatch<actionType>
};

export type stateType = {
  products: productType[];
  totalAmount : number;
};

export type actionType = {
  type: "Add" | "Remove";
  payload: productType;
};

export const rootContext = createContext<null | rootContextType>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  
  const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
      case "Add":
        return {
          products: [
            ...state.products,
            {
              id: Math.random()*1000,
              image: action.payload.image,
              title: action.payload.title,
              price: action.payload.price,
              rating: action.payload.rating
            },
          ],
          totalAmount : state.totalAmount + action.payload.price
        };
        
      case "Remove":
        return {
            products: state.products.filter((item)=>item.id !== action.payload.id),
            totalAmount : state.totalAmount - action.payload.price
        }
     
        default:
            return state
    }
  };

 
 const productsArray = JSON.parse(localStorage.getItem("products")!);
 const amount = JSON.parse(localStorage.getItem("totalAmount")!);
 const initialState: stateType = {
   products: productsArray !== null ? productsArray : [],
   totalAmount: amount !== undefined ? amount : 0,
 };
  const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
     localStorage.setItem("products", JSON.stringify(state.products));
     let totalAmount: number = 0;
     for(let i of state.products){
        totalAmount += i.price;
     }
     localStorage.setItem("totalAmount",JSON.stringify(totalAmount));
   }, [state.products, state.totalAmount]);
   
  return <rootContext.Provider value={{state , dispatch}}>{children}</rootContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(rootContext);
  if(context === undefined){
    throw new Error("Error");
  }
  return context;
};

export default Provider;
