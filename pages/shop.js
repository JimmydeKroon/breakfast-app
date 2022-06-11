import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/modules/shop.module.css'
import { useState } from 'react'
import React, { useEffect, useRef } from 'react'
import CartContext from '../contexts/CartContext'

import Shopitem from '../components/shopitem/shopitem'
import ShopCategoryFilter from '../components/shop-categoryfilter/shop-categoryfilter'

export default function Shop() {
  const [filter, setFilter] = useState('all');

  function changeFilter(value) {
    setFilter(value);
  }

  const cartContext = React.useContext(CartContext);

  function updateCart(addeditem) {
    let duplicateproduct = false;

    for (let i = 0; i < cartContext.itemsincart.length; i++) {
      if(cartContext.itemsincart[i].addeditem.product === addeditem.product) {
        duplicateproduct = true;
        cartContext.itemsincart[i].addeditem.quantity = cartContext.itemsincart[i].addeditem.quantity + 1;
        return
      }
      else {
        duplicateproduct = false;
      }
    }

    if (duplicateproduct === false) {
      cartContext.setitemsincart(prevState => [...prevState, {addeditem}])
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
        <title>Breakfast shop</title>
        <meta name="description" content="Order breakfast subscription" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar
        itemsincart={cartContext.itemsincart.length}>
      </Navbar>

      <div className={styles.main}>
        <h1>Shop</h1>
        

        <ShopCategoryFilter
          currentfilter={filter}
          changeFilter={changeFilter}>
        </ShopCategoryFilter>

        <Shopitem
          imgsrc='/images/eggtoast.png'
          imgalt='eggtoast'
          title='Egg-avocado toast'
          description='A boiled egg with slices of avocado on toasted bread'
          price='2.95'
          category='food'
          currentfilter={filter}
          updateCart={updateCart}>
        </Shopitem>

        <Shopitem
          imgsrc='/images/croissant.png'
          imgalt='crossaint'
          title='crossaint'
          description='A delicious butter crossaint'
          price='1.00'
          category='food'
          currentfilter={filter}
          updateCart={updateCart}>
        </Shopitem>

        <Shopitem
          imgsrc='/images/burrito.png'
          imgalt='breakfast buritto'
          title='Breakfast buritto'
          description='A wrap with lettuce, tomatoes, avocado, corn, cheese and beans. Healthy and tasty!'
          price='3.95'
          category='food'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>

        <Shopitem
          imgsrc='/images/eggsbacon.jpeg'
          imgalt='Bacon, eggs and toast'
          title='Bacon &amp; eggs with toast'
          description='Crispy bacon strips with 2 perfect fried eggs and toast on the side'
          price='3.50'
          category='food'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>

        <Shopitem
          imgsrc='/images/coffee.png'
          imgalt='coffee'
          title='Coffee'
          description='Made with carefully selected beans of the highest quality and fair trade'
          price='1.50'
          category='drinks'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>

        <Shopitem
          imgsrc='/images/tea.png'
          imgalt='Arizona green tea'
          title='Arizona green tea'
          description='0.5L of Arizonas famous green tea'
          price='1.95'
          category='drinks'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>

        <Shopitem
          imgsrc='/images/jusorange.png'
          imgalt='Jus d&#39;orange'
          title='Jus d&#39;orange'
          description='Freshly squeezed orange jus, 0.33L'
          price='1.95'
          category='drinks'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>

        <Shopitem
          imgsrc='/images/apple.png'
          imgalt='apple'
          title='Apple'
          description='Very shiny and super refreshing!'
          price='1.00'
          category='fruit'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>

        <Shopitem
          imgsrc='/images/banana.png'
          imgalt='banana'
          title='Banana'
          description='A banana, enough energy to get you all the way to lunchtime'
          price='1.00'
          category='fruit'
          currentfilter={filter}
          updateCart={updateCart}> 
        </Shopitem>
      </div>
    </div>
  )
}