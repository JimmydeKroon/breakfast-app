import Image from 'next/image'
import styles from './profilebanner.module.css'

export default function profilebanner() {
  return (
    <div className={styles.profilebanner}>
      <div className={styles.imagewrapper}>
        <Image
          src='/images/Toto-profile.jpeg'
          height={90}
          width={90} 
          alt='profile picture'
        />
      </div>
      <h3>Toto Wolff</h3>
    </div>
  )
}