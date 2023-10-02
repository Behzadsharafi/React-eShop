import { useContext } from "react";
import styles from "./Cart.module.scss";
import CartItem from "./../CartItem/CartItem";
import CartContext from "./../../context/Cart-Context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}

      <div>
        <span>Total Amount: </span>
        <span>${totalAmount} </span>
      </div>
      <div>
        <button>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </div>
  );
};

export default Cart;
