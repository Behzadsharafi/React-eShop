import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Header } from "./components/Header/Header";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "./config/firestore";
import ChildrenList from "./components/ChildrenList";
import AddNew from "./components/AddNew";
import CartPage from "./pages/CartPage/CartPage";
import ItemsContextProvider from "./context/ItemsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import CartProvider from "./context/CartProvider";
import ItemPage from "./pages/ItemPage/ItemPage";
import styles from "./App.module.scss";

function App() {
  // const collectionRef = collection(db, "oses");
  // const [docs, loading, error] = useCollectionData(collectionRef);
  return (
    <>
      {/* <ul>
        {docs?.map((doc) => (
          <div key={Math.random()}>
            <li>{doc.name}</li>

            <ChildrenList path={`oses/${doc.name}/children`} />
          </div>
        ))}

        <AddNew path="oses" />
      </ul> */}

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
