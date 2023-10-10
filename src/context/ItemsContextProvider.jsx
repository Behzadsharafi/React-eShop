import { createContext, useState, useEffect } from "react";
import { getAllItems } from "../services/fashion-service";

export const ItemsContext = createContext(null);

const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const refreshItems = () => {
    getAllItems()
      .then((items) => setItems(items))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    refreshItems();
  }, []);

  return (
    <ItemsContext.Provider value={{ items, refreshItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
