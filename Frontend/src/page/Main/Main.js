import React, { forwardRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Main.css";
import { fetchCategories } from "../../asyncAction/categories";
import { Link } from "react-router-dom";
import { baseUrl } from "../..";
import NewYearSale from "../../components/Sale/Sale";
import Discount from "../../components/Discount/Discount";
import { fetchAllProductsList } from "../../asyncAction/category";
import Stock from "../../components/Stock/Stock";

const Main = forwardRef((props, ref) => {
  const{CouponRef,StockRef,CategoryRef}=props
  let categories = useSelector((store) => store.categoriesList.categoriesList);
  let products = useSelector((store) => store.productsList.productsList);
  let dispatch = useDispatch();
  let newCategory = categories.slice(0, 4);
  let newProduct = products.filter(
    (elem) => elem.price - elem.discont_price !== 0
  );
  let newProducts = newProduct.slice(0, 3);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchAllProductsList());
  }, []);

  

  return (
    <div>
      <NewYearSale />
      <div ref={CategoryRef} className="section_two">
        <div className="section_two_wrapper">
          <h3>Categories</h3>
          <Link to="/categories/all" className="btn_category">
            {" "}
            All categories
          </Link>
        </div>
        <div className="category_types">
          {newCategory.map((elem) => (
            <Link key={elem.id} to={`/categories/${elem.id}`}>
              <div>
                <img
                  src={baseUrl + elem.image}
                  alt="photo"
                  width="310"
                  height="280"
                />
                <p className="category_text">{elem.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Discount ref={CouponRef} />
      <Stock newProducts={newProducts} ref={StockRef}/>
      </div>
  );
});

export default Main;
