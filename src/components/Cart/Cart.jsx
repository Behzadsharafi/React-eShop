import { useContext } from "react";
import styles from "./Cart.module.scss";
import CartItem from "./../CartItem/CartItem";
import { CartContext } from "../../context/CartContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Cart = () => {
  const { totalAmount, items, removeItem, addItem, deleteItem, order } =
    useContext(CartContext);

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemDeleteHandler = (id) => {
    deleteItem(id);
  };

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const navigate = useNavigate();

  const orderHandler = async () => {
    // console.log(items[0]);
    for (let i = 0; i < items.length; i++) {
      const docRef = doc(db, `fashion/${items[i].id}/variants`, items[i].size);
      const querySnapshot = await getDoc(docRef);
      const updatedValue = querySnapshot.data().qty - items[i].amount;
      updateDoc(docRef, { qty: updatedValue });
    }
    order();
  };

  const cartItems = (
    <ul
      style={{ display: items.length === 0 ? "none" : "" }}
      className={styles.cart__items}
    >
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
          onDelete={() => cartItemDeleteHandler(item.id)}
          amount={item.amount}
          image={item.image}
          size={item.size}
          id={item.id}
        />
      ))}
    </ul>
  );

  return (
    <main className={styles.cart}>
      {items.length === 0 && (
        <div className={styles.cart__empty}>
          {" "}
          <h2>Your Bag Is Empty!</h2>{" "}
        </div>
      )}
      {cartItems}
      <section
        style={{ display: items.length === 0 ? "none" : "" }}
        className={styles.cart__summary}
      >
        {items.length !== 0 && (
          <div className={styles.cart__summary__details}>
            <p className={styles.cart__summary__details__title}>
              Order Summary
            </p>
            <div className={styles.cart__summary__details__total}>
              {/* <span>Total Amount: </span> */}
              <span>AU${totalAmount.toFixed(2)} </span>
            </div>
            <p className={styles.cart__summary__details__gst}>Incl GST</p>
          </div>
        )}
        <div className={styles.cart__summary__buttons}>
          {hasItems && (
            <button
              onClick={() => navigate(`/`)}
              className={styles.cart__summary__buttons__button}
            >
              Continue Shopping
            </button>
          )}
          {hasItems && (
            <button
              onClick={orderHandler}
              className={styles.cart__summary__buttons__button}
            >
              Order Now
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
