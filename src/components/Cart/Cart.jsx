import { useContext } from "react";
import styles from "./Cart.module.scss";
import CartItem from "./../CartItem/CartItem";
import { CartContext } from "./../../context/Cart-Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { totalAmount, items, removeItem, addItem } = useContext(CartContext);

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles.cart__items}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
          amount={item.amount}
          image={item.image}
        />
      ))}
    </ul>
  );

  return (
    <main className={styles.cart}>
      {cartItems}
      <section className={styles.cart__summary}>
        <p className={styles.cart__summary__title}>Order Summary</p>
        <div className={styles.cart__summary__total}>
          {/* <span>Total Amount: </span> */}
          <span>AU${totalAmount.toFixed(2)} </span>
        </div>
        <p className={styles.cart__summary__gst}>Incl GST</p>
        <div className={styles.cart__summary__buttons}>
          <Link to="/" className={styles.cart__summary__buttons__button}>
            Continue Shopping
          </Link>
          {hasItems && (
            <button className={styles.cart__summary__buttons__button}>
              Checkout Now
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
