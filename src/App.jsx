import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
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
      <ItemsContextProvider>
        <CartContextProvider>
          <CartProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </CartContextProvider>
      </ItemsContextProvider>
    </>
  );
}

export default App;
