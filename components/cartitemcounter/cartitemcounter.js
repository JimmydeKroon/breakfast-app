import styles from './cartitemcounter.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'

export default function Cartitemcounter(props) {
  return(
    <div className={styles.cartquantitycounter}>
        <FontAwesomeIcon
          icon={faSquarePlus}
          onClick={ () => props.updatequantity(props.product, "plus")}>
        </FontAwesomeIcon>
      <p>{props.quantity}</p>
        <FontAwesomeIcon
          icon={faSquareMinus}
          onClick={ () => props.updatequantity(props.product, "minus")}>
        </FontAwesomeIcon>
    </div>
  )
}