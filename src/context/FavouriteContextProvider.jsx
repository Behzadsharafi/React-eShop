import { createContext, useState, useEffect, useReducer } from "react";

export const FavouriteContext = createContext(null);

// const defaultFavouriteState = {
//   favouriteItems: [],
//   totalFavourite: 0,
// };

// const favouriteReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedTotalFavourite = state.totalFavourite + 1;

//     const existingFavouriteItemIndex = state.favouriteItems.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingFavouriteItem =
//       state.favouriteItems[existingFavouriteItemIndex];
//     let updatedFavouriteItems;

//     if (existingFavouriteItem) {
//       const updatedFavouriteItem = {
//         ...existingFavouriteItem,
//       };
//       updatedFavouriteItems = [...state.favouriteItems];
//       updatedFavouriteItems[existingFavouriteItemIndex] = updatedFavouriteItem;
//     } else {
//       updatedFavouriteItems = state.favouriteItems.concat(action.item);
//     }
//     return {
//       favouriteItems: updatedFavouriteItems,
//       totalFavourite: updatedTotalFavourite,
//     };
//   }

//   return defaultFavouriteState;
// };

const FavouriteContextProvider = ({ children }) => {
  const [faveItems, setFaveItems] = useState([]);

  // const [favouriteState, dispatchFavouriteAction] = useReducer(
  //   favouriteReducer,
  //   defaultFavouriteState
  // );

  const addItemToFavouriteHandler = (item) => {
    // dispatchFavouriteAction({ type: "ADD", item: item });
    const isItemInFav = faveItems.some((favItem) => favItem.id === item.id);
    const updatedFav = isItemInFav
      ? faveItems.filter((favItem) => favItem.id !== item.id)
      : [...faveItems, item]; // Add the item
    setFaveItems(updatedFav);
  };

  const favouriteContext = {
    // favouriteItems: favouriteState.favouriteItems,
    // totalFavourite: favouriteState.totalFavourite,
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

// const FavouriteContextProvider = ({ children }) => {
//   const [favouriteItems, setFavouriteItems] = useState([1, 2]);

//   // useEffect(() => {
//   //   console.log(favouriteItems);
//   // }, [favouriteItems]);

//   return (
//     <FavouriteContext.Provider value={(favouriteItems, setFavouriteItems)}>
//       {children}
//     </FavouriteContext.Provider>
//   );
// };

// export default FavouriteContextProvider;
