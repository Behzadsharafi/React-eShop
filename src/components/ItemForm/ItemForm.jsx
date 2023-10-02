import { useRef } from "react";
import Input from "../Input/Input";

const ItemForm = ({ onAddToCart, id }) => {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <input ref={amountInputRef} id={id} type="number" defaultValue="1" />
      {/* <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      /> */}
      <button>+ Add</button>
    </form>
  );
};

export default ItemForm;
