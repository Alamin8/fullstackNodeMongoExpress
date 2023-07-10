import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.jsx";
import Products from "./products/Products.jsx";
import AddProduct from "./addProduct/AddProduct.jsx";
// import ProductExpiry from "./productExpiry/ProductExpiry.jsx";
import Income from './income/Income.jsx'
import Expense from "./expense/Expense.jsx"
import Commission from './commission/Commission.jsx'
import Stuff from './stuff/Stuff.jsx'
import Account from './account/Account.jsx'
import NotFound from "./partials/notFound/NotFound.jsx";
import ViewProducts from "./products/ViewProducts.jsx";

const AdminRoute = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:_id" element={<ViewProducts/>} />
      <Route path="add_product" element={<AddProduct />} />
      {/* <Route path="product_expiry" element={<ProductExpiry />} /> */}
      <Route path="income" element={<Income />} />
      <Route path="expense" element={<Expense />} />
      <Route path="commission" element={<Commission />} />
      <Route path="stuff" element={<Stuff />} />
      <Route path="account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoute;
