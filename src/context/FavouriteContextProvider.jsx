import { createContext, useState, useEffect, useReducer } from "react";

export const FavouriteContext = createContext(null);

const FavouriteContextProvider = ({ children }) => {
  const [faveItems, setFaveItems] = useState([]);

  const addItemToFavouriteHandler = (item) => {
    const isItemInFav = faveItems.some((favItem) => favItem.id === item.id);
    const updatedFav = isItemInFav
      ? faveItems.filter((favItem) => favItem.id !== item.id)
      : [...faveItems, item];
    setFaveItems(updatedFav);
  };

  const favouriteContext = {
    addFavourite: addItemToFavouriteHandler,
    faveItems: faveItems,
  };

  return (
    <FavouriteContext.Provider value={favouriteContext}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
