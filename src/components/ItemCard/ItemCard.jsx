import { Link, useNavigate } from "react-router-dom";
import styles from "./ItemCard.module.scss";
import { useContext } from "react";
import ItemForm from "../ItemForm/ItemForm";
import CartContext from "./../../context/Cart-Context";

export const ItemCard = ({ name, img, price, favourite, id }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: 1,
      price: price,
    });
  };

  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={id}>
        <img className={styles.card__img} src={img} alt="" />
        <h3 className={styles.card__title}>{name}</h3>
        <h3 className={styles.card__price}>${price}</h3>
      </Link>
      <ItemForm
        className={styles.card__form}
        onAddToCart={addToCartHandler}
        id={id}
      />
      {/* <button onClick={addToCartHandler}>Add to Cart</button> */}
    </div>
  );
};
