import { Link, useNavigate } from "react-router-dom";
import styles from "./ItemCard.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import Heart from "../../assets/Heart.svg";
import HeartFilled from "../../assets/HeartFilled.svg";
import { FavouriteContext } from "./../../context/FavouriteContextProvider";

export const ItemCard = ({ name, image, price, id, items }) => {
  const { addItem } = useContext(CartContext);
  const { addFavourite, faveItems } = useContext(FavouriteContext);
  const [error, setError] = useState(false);
  const [size, setSize] = useState(null);

  const addToFavouriteHandler = () => {
    addFavourite({
      id: id,
      name: name,
      amount: 1,
      price: price,
      image: image,
      size: size,
    });
  };

  const favouriteItemsIds = faveItems.map((item) => item.id);

  const addToCartHandler = () => {
    setError(false);
    if (size === null || size === "notSelected") {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 400);
      return;
    }

    addItem({
      id: id,
      name: name,
      amount: 1,
      price: price,
      image: image,
      size: size,
    });
  };

  useEffect(() => {
    setError(false);
  }, [size]);

  // const handleSizeSelect = (event) => {
  //   setSize(event.target.value);
  // };

  //do not include
  // const handleLike = (id) => {
  //   // if (favouriteItems.includes(id)) {
  //   //   setFavouriteItems(favouriteItems.filter((sitem) => item !== id));
  //   // } else {
  //   setFavouriteItems([...favouriteItems, id]);
  //   // }
  // };

  const handleSizeSelect = (event) => {
    setSize(event.target.value);
  };

  const selectStyle = error
    ? `${styles.card__select} ${styles.card__select__error}`
    : styles.card__select;

  return (
    <div className={styles.card}>
      <img
        onClick={addToFavouriteHandler}
        className={styles.card__heart}
        src={favouriteItemsIds.includes(id) ? HeartFilled : Heart}
        alt="Heart-Icon"
      />
      <Link className={styles.card__link} to={`/${id}`}>
        <img className={styles.card__img} src={image} alt="" />
        <h3 className={styles.card__title}>{name}</h3>
        <h3 className={styles.card__price}>${price.toFixed(2)}</h3>
      </Link>
      <div className={styles.card__buttons}>
        <select
          className={selectStyle}
          name=""
          id=""
          onChange={handleSizeSelect}
          defaultValue={"notSelected"}
        >
          <option value="notSelected">Pick a Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button className={styles.card__button} onClick={addToCartHandler}>
          Add To Bag
        </button>
      </div>
    </div>
  );
};