import Head from "next/head";
import Navbar from '../components/navbar/navbar'
import styles from '../styles/modules/cart.module.css'
import React from 'react'
import CartContext from '../contexts/CartContext'

import Cartitem from "../components/cartitem/cartitem";
import Cartitemcounter from "../components/cartitemcounter/cartitemcounter";

export default function Cart () {
  const cartContext = React.useContext(CartContext);

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
          {cartContext.itemsincart.map((item, index) => <Cartitem info={item} key={index}></Cartitem>)}
        </div>
      </div>
    </div>
  )
}