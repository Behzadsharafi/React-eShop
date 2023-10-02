import styles from "./Header.module.scss";
import ShoppingBag from "../../assets/ShoppingBag.svg";
import Heart from "../../assets/Heart.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Cart-Context";

export const Header = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.header__icons__icon} ${
    btnIsHighlighted ? styles.bump : ""
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

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        ZAD Fashion
      </Link>
      <span className={styles.header__icons}>
        <span className={styles.header__icons__icon}>
          <img
            className={styles.header__icons__icon__img}
            src={Heart}
            alt="HeartIcon"
          />
          <span className={styles.header__icons__icon__number}>5</span>
        </span>
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
    </header>
  );
};
