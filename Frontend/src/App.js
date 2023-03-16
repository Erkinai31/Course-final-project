import Main from "./page/Main/Main";
import { Route, Routes } from "react-router-dom";
import Category from "./page/Category/CategoriesList";
import CategoryTypes from "./page/categoryTypes/CategoryTypes";
import { useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./page/Product/ProductsList";
import Product from "./page/Product/Product";
import Basket from "./page/Basket/Basket";

function App() {
  const CouponRef = useRef();
  const CategoryRef = useRef();
  const ContactRef = useRef();
  const StockRef = useRef();

  return (
    <div>
      <Header
      CouponRef={CouponRef} 
      CategoryRef={CategoryRef}
      StockRef={StockRef}
      ContactRef={ContactRef}/>
      <Routes>
        <Route path="/" element={<Main 
                                  CouponRef={CouponRef} 
                                  CategoryRef={CategoryRef}
                                  StockRef={StockRef}
                                  />} />
        <Route path="/categories/all" element={<Category />} />
        <Route path="/products/all" element={<ProductsList />} />
        <Route path="/categories/:id" element={<CategoryTypes />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer ContactRef={ContactRef}/>
    </div>
  );
}
export default App;
