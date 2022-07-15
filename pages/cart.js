import Head from "next/head";
import Navbar from '../components/navbar/navbar'
import styles from '../styles/modules/cart.module.css'
import React, { useEffect, useRef } from 'react'
import CartContext from '../contexts/CartContext'

import Cartitem from "../components/cartitem/cartitem";
import Cartitemcounter from "../components/cartitemcounter/cartitemcounter";

export default function Cart () {
  const cartContext = React.useContext(CartContext);

  function removeFromCart(passeditem) {
    cartContext.setitemsincart(prevState => prevState.filter(index => index.addeditem.product !== passeditem))
  }

  function updateQuantity(clickeditem, action){
    for (let i = 0; i < cartContext.itemsincart.length; i++) {
      if(cartContext.itemsincart[i].addeditem.product === clickeditem && action === "plus") {
        cartContext.itemsincart[i].addeditem.quantity = cartContext.itemsincart[i].addeditem.quantity + 1;
      }
      if(cartContext.itemsincart[i].addeditem.product === clickeditem && action === "minus") {
        if(cartContext.itemsincart[i].addeditem.quantity > 1) {
          cartContext.itemsincart[i].addeditem.quantity = cartContext.itemsincart[i].addeditem.quantity - 1;
        }
      }

      cartContext.setitemsincart(prevState => [...prevState]);
    }
  }

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; // prevents empty localstorage update on first page visit
    } else {
      localStorage.setItem(1, JSON.stringify(cartContext.itemsincart))
    }
  }, [cartContext]);

  return(
    <div className={styles.container}>
      <Head>
        <title>Breakfast cart</title>
        <meta name="description" content="Order breakfast subscription" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        itemsincart={cartContext.itemsincart.length}>
      </Navbar>

      <div className={styles.main}>
        <h1>Cart</h1>

        <div className={styles.allcartitems}>
          {cartContext.itemsincart.map((item, index) => 
          <Cartitem 
            info={item} 
            quantity={item.addeditem.quantity}
            key={index}
            remove={removeFromCart}
            updatequantity={updateQuantity}>
          </Cartitem>)}
        </div>
      </div>
    </div>
  )
}