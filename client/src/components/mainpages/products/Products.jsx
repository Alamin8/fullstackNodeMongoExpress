import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";

const Products = () => {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productAPI.products;
  const [query, setQuery] = useState("");
  const [ExpiryDays, setExiryDays] = useState("");

 



  const handleExpiryTime = (x, y, z) => {
    const d = new Date();
    const presentValue = d.getDate() + (d.getMonth() + 1) * 30 + d.getFullYear() * 12 * 30;
    const futureValue = x + y * 30 + z * 12 * 30;
    const ExpiryEndDays = futureValue - presentValue;
    if (ExpiryEndDays <= 0) {
      return (
        <td className="expiry_status expired">
          <span>Expired</span>
        </td>
      );
    }
    if (1 <= ExpiryEndDays && ExpiryEndDays <= 31) {
      return (
        <td className="expiry_status expiredSoon">
          <span>{ExpiryEndDays} Days Left</span>
        </td>
      );
    } else if (32 <= ExpiryEndDays && ExpiryEndDays <= 62) {
      return (
        <td className="expiry_status expiredFast">
          <span>{ExpiryEndDays} Days Left</span>
        </td>
      );
    } else {
      return (
        <td className="expiry_status expiredLate">
          <span>{ExpiryEndDays} Days Left </span>
        </td>
      );
    }
  };

  return (
    <>
      <div className="products">
        <div className="productsheader">
          <span>Products</span>
          <Link to="/add_product" className="addProductBtn">
            Add Product
          </Link>
        </div>
        <div className="productSearch">
          <div className="search1">
            <label htmlFor="">Search</label>
            <input
              type="text"
              className="searchFirld"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="productTable">
          <table className="productData">
            <thead>
              <tr>
                <th className="pSI">SI</th>
                <th className="p_img">Image</th>
                <th className="p_name">Product Name</th>
                <th className="p_code">Product Code</th>
                <th className="p_itemcode">Item Code</th>
                <th className="p_price">Price</th>
                <th className="p_stoc">Stoc</th>
                <th className="expiry_date">Expiry Date</th>
                <th className="expiry_status">Expiry Status</th>
                <th className="p_addedby">Added by</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {products
                .filter(
                  (item) =>
                    item.product_name
                      .toLowerCase()
                      .includes(query.toLowerCase()) ||
                    item.product_code.toString().includes(query.toString()) ||
                    item.product_barcode.toString().includes(query.toString())
                )
                .map((product, index) => (
                  <Link to={`/products/${product._id}`} key={product._id}>
                    <tr>
                      <td className="pSI">{index + 1}</td>
                      <td className="p_img">
                        <img src={product.images.url} alt="" />
                      </td>
                      <td className="p_name">{product.product_name}</td>
                      <td className="p_code">{product.product_code}</td>
                      <td className="p_itemcode">{product.product_barcode}</td>
                      <td className="p_price">{product.price} Tk</td>
                      <td className="p_stoc">{product.stoc} ps</td>
                      <td title="DD-MM-YYYY" className="expiry_date">
                        {product.exp_day}-{product.exp_month}-{product.exp_year}
                      </td>

                      {handleExpiryTime(
                        product.exp_day,
                        product.exp_month,
                        product.exp_year
                      )}

                      <td className="p_addedby">
                        <span className="PLI_name">
                          {product.product_listed_info.name}-
                          {product.product_listed_info.stuff_id}
                        </span>
                        Time:
                        <span className="PL_date" title="MM-DD-YYYY">
                          {product.listed_date}
                        </span>
                      </td>
                    </tr>
                  </Link>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
