import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import react, { useState, useEffect } from 'react'
import CartContext from '../contexts/CartContext'

function MyApp({ Component, pageProps }) {
  const [itemsInCart, setItemsInCart] = useState([])

  useEffect(() => {
    const localStorageUnpack = JSON.parse(localStorage.getItem(1))
    if (localStorageUnpack !== null) {
      setItemsInCart(localStorageUnpack)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        itemsincart: itemsInCart,
        setitemsincart: setItemsInCart
      }}
    >
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
