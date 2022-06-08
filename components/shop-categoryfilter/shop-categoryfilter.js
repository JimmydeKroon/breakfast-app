import styles from './shop-categoryfilter.module.css'

export default function ShopCategoryFilter(props) {
  function handleClick(button) {
    const allFilterButtons = button.path[1].children
    for (const item of allFilterButtons) {
      item.classList.remove(styles.active);
    }

    button.target.classList.add(styles.active);
    props.changeFilter(button.target.value.toLowerCase());
  }

  return(
    <div className={styles.container}>
      <input type="button" className={ styles.shopcategorybutton + ' ' + styles.active } value="All" onClick={ () => handleClick(event) }></input>
      <input type="button" className={ styles.shopcategorybutton } value="Food" onClick={ () => handleClick(event) }></input>
      <input type="button" className={ styles.shopcategorybutton } value="drinks" onClick={ () => handleClick(event) }></input>
      <input type="button" className={ styles.shopcategorybutton } value="fruit" onClick={ () => handleClick(event) }></input>
    </div>
  )
}