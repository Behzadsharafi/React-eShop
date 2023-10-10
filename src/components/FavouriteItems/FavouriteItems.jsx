import { useContext } from "react";
import { FavouriteContext } from "../../context/FavouriteContextProvider";
import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./FavouriteItems.module.scss";

const FavouriteItems = () => {
  const { faveItems, addFavourit } = useContext(FavouriteContext);

  // const items = (
  //   <div className={styles.grid}>
  //     {favouriteItems?.map((item) => (
  //       <ItemCard
  //         key={item.id}
  //         name={item.name}
  //         image={item.imageLink}
  //         price={item.price}
  //         favourite={item.favourite}
  //         id={item.id}
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <div className={styles.grid}>
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
  );
};

export default FavouriteItems;
