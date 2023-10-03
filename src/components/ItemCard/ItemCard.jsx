import { Link, useNavigate } from "react-router-dom";
import styles from "./ItemCard.module.scss";
import { useContext } from "react";
import { CartContext } from "./../../context/Cart-Context";

export const ItemCard = ({ name, image, price, favourite, id }) => {
  const { addItem } = useContext(CartContext);

  const addToCartHandler = () => {
    addItem({
      id: id,
      name: name,
      amount: 1,
      price: price,
      image: image,
    });
  };

  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={id}>
        <img className={styles.card__img} src={image} alt="" />
        <h3 className={styles.card__title}>{name}</h3>
        <h3 className={styles.card__price}>${price.toFixed(2)}</h3>
      </Link>
      <button className={styles.card__button} onClick={addToCartHandler}>
        Add To Bag
      </button>
    </div>
  );
};
