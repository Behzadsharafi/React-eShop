import { useNavigate } from "react-router-dom";
import styles from "./CartItem.module.scss";

const CartItem = ({
  price,
  name,
  amount,
  image,
  onRemove,
  onAdd,
  onDelete,
  size,
  id,
}) => {
  const navigate = useNavigate();

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
          <span className={styles.item__actions}>
            <button className={styles.item__actions__action} onClick={onRemove}>
              −
            </button>
            <button className={styles.item__actions__action} onClick={onAdd}>
              +
            </button>
          </span>
        </div>
        <div className={styles.item__size}>
          <strong> Size:</strong> {size}
        </div>
        <button className={styles.item__delete} onClick={onDelete}>
          Delete Item
        </button>
      </div>
      <img
        onClick={() => navigate(`/${id}`)}
        className={styles.item__image}
        src={image}
        alt=""
      />
    </li>
  );
};

export default CartItem;
