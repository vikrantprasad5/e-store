import React from "react";
import {CartContext} from '../context/cart';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import {Link} from 'react-router-dom';
// import {UserContext} from '../context/user'
export default function Cart() {
  let user = false;
  const {cart,total} = React.useContext(CartContext);
  //console.log({cart,total});
  if(cart.length === 0){
    return <EmptyCart/>;
  }
  return <h1>hello from cart page</h1>;
}
