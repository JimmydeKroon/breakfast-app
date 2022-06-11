import styles from './cartitem.module.css'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

import Cartitemcounter from '../cartitemcounter/cartitemcounter'

export default function Cartitem(props) {

  return(
    <div className={styles.cartitemwrapper}>
      <div className={styles.cartitem}>
          <div className={styles.imagewrapper}>
            { props.info.addeditem.imgsrc && ( // only render img if props.imgsrc exist
              <Image
                src={props.info.addeditem.imgsrc}
                height={100}
                width={100} 
                alt={props.product}
              />
            )}
          </div>

          <div className={styles.information}>
            <h3>{props.info.addeditem.product}</h3>
            <p>${props.info.addeditem.price}</p>
          </div>

          <div 
            className={styles.removefromcart}
            onClick={ () => props.remove(event)
            }>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </div>
      </div>

      <Cartitemcounter
        quantity={props.info.addeditem.quantity}>
      </Cartitemcounter>
    </div>
  )
}