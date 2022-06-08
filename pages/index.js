import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/modules/index.module.css'
import Welcomebanner from '../components/welcomebanner/welcomebanner'
import CartContext from '../contexts/CartContext'
import React from 'react'

// font awesome imports
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const cartContext = React.useContext(CartContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Breakfast app</title>
        <meta name="description" content="Order breakfast subscription" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/84198aa556.js" crossOrigin="anonymous"></script>
      </Head>

      <Navbar
        itemsincart={cartContext.itemsincart.length}>
      </Navbar>
      
      <div className={styles.main}>
        <h1>Hi Toto!</h1>

        <div className={styles.welcomebanners}>
          <Welcomebanner 
            message='NEW! avocado egg toast'
            icon={faTags}
            background='/images/welcomebanner1.png'
            class='1'>
          </Welcomebanner>

          <Welcomebanner 
            message='Save 10% off your first order!' 
            icon={faExclamationCircle}
            background='/images/welcomebanner2.png'
            class='2'>
          </Welcomebanner>
        </div>
      </div>

    </div>
  )
}
