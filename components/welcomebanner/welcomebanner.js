import styles from './welcomebanner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function welcomebanner(props) {
  return (
    <div className={styles.welcomebanner + ' ' + styles[`banner${props.class}`]}>
      <Image
          src={props.background}
          height={200}
          width={375} 
          alt='profile picture'
      />
      <FontAwesomeIcon icon={props.icon} />
      <h2>{props.message}</h2>
    </div>
  )
}