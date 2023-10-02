import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { getItemById, getVariants } from "../../services/fashion-service";

const ProductPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [variants, setVariants] = useState(null);

  useEffect(() => {
    getItemById(id)
      .then((item) => setItem(item))
      .catch((error) => console.log(error));
    getVariants(id)
      .then((variants) => setVariants(variants))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <main>
      {item && (
        <>
          <img src={item.imageLink} alt="" />
          <h3 className={styles.card__brand}>Tommy Jeans</h3>
          <h3 className={styles.card__title}>{item.name}</h3>
          <h3 className={styles.card__price}>${item.price}</h3>
        </>
      )}
      {variants &&
        variants.map((variant) => (
          <h1 key={variant.color + variant.name}>
            {variant.color} {variant.quantity}
          </h1>
        ))}
    </main>
  );
};

export default ProductPage;
