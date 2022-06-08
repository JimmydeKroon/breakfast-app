import styles from './shopitem.module.css'
import Image from 'next/image'

export default function Shopitem(props) {
  if (props.currentfilter === props.category || props.currentfilter === 'all') {
    return (
      <div className={styles.shopitem}>
        <div className={styles.imagewrapper}>
          { props.imgsrc && ( // only render img if props.imgsrc exist
            <Image
              src={props.imgsrc}
              height={120}
              width={120} 
              alt={props.imgalt}
            />
          )}
        </div>

        <div className={styles.description}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>

        <div className={styles.pricing}>
          <h3>${props.price}</h3>
          <input 
            type="button" 
            className={styles.addbutton} 
            value="Add to cart" 
            onClick={ () => props.updateCart({
              product:props.title,
              imgsrc:props.imgsrc,
              price:props.price,
              quantity:1
              })
            }> 
          </input>
        </div>

      </div>
    )
  }
  else {
    return (
      null
    )
  }
}