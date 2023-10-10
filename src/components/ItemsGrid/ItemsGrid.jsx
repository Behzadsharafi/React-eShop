import { useContext, useEffect, useState } from "react";
import styles from "./ItemsGrid.module.scss";
import { getAllItems } from "../../services/fashion-service";
import { ItemCard } from "../ItemCard/ItemCard";
import { ItemsContext } from "../../context/ItemsContextProvider";

const ItemsGrid = () => {
  // const [items, setItems] = useState([]);
  const { items } = useContext(ItemsContext);

  // const refreshItems = () => {
  //   getAllItems()
  //     .then((items) => setItems(items))
  //     .catch((e) => console.log(e));
  // };

  // useEffect(() => {
  //   refreshItems();
  // }, []);
  return (
    <div className={styles.grid}>
      {items?.map((item) => (
        <ItemCard
          key={item.id}
          name={item.name}
          image={item.imageLink}
          price={item.price}
          favourite={item.favourite}
          id={item.id}
          items={items}
        />
      ))}
    </div>
  );
};

export default ItemsGrid;
