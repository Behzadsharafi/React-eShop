import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Header } from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import ItemsContextProvider from "./context/ItemsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import CartProvider from "./context/CartProvider";
import ItemPage from "./pages/ItemPage/ItemPage";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.main}>
        <ItemsContextProvider>
          <CartContextProvider>
            <CartProvider>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/:id" element={<ItemPage />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </CartContextProvider>
        </ItemsContextProvider>
      </div>
    </>
  );
}

export default App;
