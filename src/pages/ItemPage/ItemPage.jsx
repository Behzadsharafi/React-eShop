import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { getItemById, getVariants } from "../../services/fashion-service";
import { CartContext } from "../../context/CartContextProvider";

const returnPolicy = ` At ZAD Fashion, we want you to be completely satisfied with your
purchase. You have 30 days from the receipt of your order to
initiate a return, provided the items are in their original,
unworn, unwashed condition with all tags and packaging intact.
Some items, such as undergarments, swimwear, and personalized
items, are non-returnable, except in cases of damage or defects.
To start a return, log in to your account, select the order, and
follow the prompts. Return shipping is the responsibility of the
customer, except for damaged or defective items. Refunds will be
issued to the original payment method, typically within 10
business days. Unfortunately, we don't offer direct exchanges, so
you'll need to place a new order for desired items. If you receive
damaged or defective items, contact our customer support team for
assistance. For further inquiries, please reach out to us at
info@ZadFashion.com.au. We're committed to ensuring your shopping
experience with us is exceptional. Please note that this return
policy is subject to change; check our website for updates.`;

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [variants, setVariants] = useState(null);
  const { addItem } = useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState("hello");
  const [error, setError] = useState(false);
  const [size, setSize] = useState(null);

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
      name: item.name,
      image: item.imageLink,
      amount: 1,
      price: item.price,
      size: size,
    });
  };

  useEffect(() => {
    getItemById(id)
      .then((item) => setItem(item))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    setError(false);
  }, [size]);

  const handleSizeSelect = (event) => {
    setSize(event.target.value);
  };

  const selectStyle = error
    ? `${styles.container__main__details__buttons__select} ${styles.container__main__details__buttons__select__error}`
    : styles.container__main__details__buttons__select;

  return (
    <>
      {item && (
        <div className={styles.container}>
          <article className={styles.container__main}>
            <img
              className={styles.container__main__img}
              src={item.imageLink}
              alt=""
            />
            <section className={styles.container__main__details}>
              <h3 className={styles.container__main__details__title}>
                {item.name}
              </h3>
              <h3 className={styles.container__main__details__price}>
                AU${item.price.toFixed(2)}
              </h3>
              <p className={styles.container__main__details__description}>
                <strong>
                  <span>Product Details: </span>
                </strong>
                Slip into unbridled comfort with Polo Ralph Lauren's Classic Fit
                Jersey Crew Neck T-Shirt. Crafted from pure cotton, the tee
                features the pony logo the brand is synonymous with. Length:
                72cm (size medium). Our model is 180.3cm (5’11”) tall with a
                99.1cm (39”) chest and a 81.3cm (32”) waist. - Pure cotton
                jersey; ribbed stretch - Embroidered pony logo
              </p>

              <div className={styles.container__main__details__buttons}>
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
                <button
                  className={styles.container__main__details__buttons__button}
                  onClick={addToCartHandler}
                >
                  Add To Bag
                </button>
              </div>

              <p className={styles.container__main__details__return1}>
                <strong>
                  <span>Return Policy: </span>
                </strong>
                {returnPolicy}
              </p>
            </section>
          </article>
          <p className={styles.container__return2}>
            <strong>
              <span>Return Policy: </span>
            </strong>
            {returnPolicy}
          </p>
        </div>
      )}
    </>
  );
};

export default ItemPage;
