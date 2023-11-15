import { useContext } from "react";
import { FavouriteContext } from "../../context/FavouriteContextProvider";
import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./FavouriteItems.module.scss";

const FavouriteItems = () => {
  const { faveItems, addFavourite } = useContext(FavouriteContext);

  return (
    <div className={styles.main}>
      {faveItems.length === 0 && (
        <h2 className={styles.main__empty}>You Have No Favourite Items!</h2>
      )}
      <div
        style={{ display: faveItems.length === 0 ? "none" : "" }}
        className={styles.main__grid}
      >
        {faveItems?.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            favourite={item.favourite}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteItems;
