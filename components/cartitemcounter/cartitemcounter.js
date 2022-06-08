import styles from './cartitemcounter.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'

export default function Cartitemcounter(props) {
  return(
    <div className={styles.cartquantitycounter}>
      <FontAwesomeIcon icon={faSquarePlus} />
      <p>{props.quantity}</p>
      <FontAwesomeIcon icon={faSquareMinus} />
    </div>
  )
}