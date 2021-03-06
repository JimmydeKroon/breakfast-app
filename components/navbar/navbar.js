import styles from './navbar.module.css'
import Profilebanner from '../profilebanner/profilebanner'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  let itemsInCart = props.itemsincart > 0

  // const counterRef = useRef();
  // // useEffect(() => {
  // //     console.log(counterRef.current);
  // // }, [counterRef]);



  // useEffect(() => {
  //   const counter = counterRef.current
  //   counter.classList.add('addbounce');
  // }, [props.itemsincart, counterRef])

  return (
        <div className={styles.navbarcontainer}>
          <Profilebanner></Profilebanner>

          <div className={styles.navbarlist}>
            <h4>Menu</h4>
            <ul>
              <Link href="/">
                <a>
                  <li className={styles.navbaritem}><FontAwesomeIcon icon={faHouse} />Home</li>
                </a>
              </Link>
              <Link href="/shop">
                <a>
                  <li className={styles.navbaritem}><FontAwesomeIcon icon={faShop} />Breakfast menu</li>
                </a>
              </Link>
              <Link href="/cart">
                <a>
                  <li className={styles.navbaritem}><FontAwesomeIcon icon={faCartShopping} />Cart{itemsInCart ? <span className={styles.cartcounter}>{props.itemsincart}</span> : null}</li>
                </a>
              </Link>
              <li className={styles.navbaritem}><FontAwesomeIcon icon={faUser} />Account</li>
            </ul>
          </div>
        </div>
  )
}