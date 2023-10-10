import styles from "./Header.module.scss";
import ShoppingBag from "../../assets/ShoppingBag.svg";
import Heart from "../../assets/Heart.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { FavouriteContext } from "../../context/FavouriteContextProvider";

export const Header = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [heartIsHighlighted, setHeartIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const { faveItems } = useContext(FavouriteContext);

  // const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.header__icons__icon} ${
    btnIsHighlighted ? styles.bump : ""
  }`;

  const heartClasses = `${styles.header__icons__icon} ${
    heartIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  useEffect(() => {
    if (faveItems.length === 0) {
      return;
    }
    setHeartIsHighlighted(true);

    const timer = setTimeout(() => {
      setHeartIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [faveItems]);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/" className={styles.header__logo}>
          ZAD Fashion
        </Link>
        <span className={styles.header__icons}>
          <Link to="/favourite" className={heartClasses}>
            <img
              className={styles.header__icons__icon__img}
              src={Heart}
              alt="HeartIcon"
            />
            <span className={styles.header__icons__icon__number}>
              {faveItems.length}
            </span>
          </Link>
          <Link to="/cart" className={btnClasses}>
            <img
              className={styles.header__icons__icon__img}
              src={ShoppingBag}
              alt="CartIcon"
            />
            <span className={styles.header__icons__icon__number}>
              {numberOfCartItems}
            </span>
          </Link>
        </span>
      </div>
    </header>
  );
};
