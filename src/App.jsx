import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Header } from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import ItemsContextProvider from "./context/ItemsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import ItemPage from "./pages/ItemPage/ItemPage";
import styles from "./App.module.scss";
import FavouriteContextProvider from "./context/FavouriteContextProvider";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div className={styles.main}>
        <ItemsContextProvider>
          <CartContextProvider>
            <FavouriteContextProvider>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/:id" element={<ItemPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/favourite" element={<FavouritePage />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </FavouriteContextProvider>
          </CartContextProvider>
        </ItemsContextProvider>
      </div>
    </>
  );
}

export default App;
