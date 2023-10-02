import styles from "./CartItem.module.scss";

const CartItem = ({ price, name, amount, image, onRemove, onAdd }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item__details}>
        <h2 className={styles.item__details__title}>{name}</h2>
        <div className={styles.item__details__summary}>
          <span className={styles.item__details__summary__price}>
            ${price.toFixed(2)}
          </span>
          <span className={styles.item__details__summary__amount}>
            x {amount}
          </span>
        </div>
        <div className={styles.item__actions}>
          <button className={styles.item__actions__action} onClick={onRemove}>
            −
          </button>
          <button className={styles.item__actions__action} onClick={onAdd}>
            +
          </button>
        </div>
      </div>
      <img className={styles.item__image} src={image} alt="" />
    </li>
  );
};

export default CartItem;
