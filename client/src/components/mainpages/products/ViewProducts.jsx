import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import { useParams } from "react-router-dom";

const ViewProducts = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productAPI.products;

  const [detailProduct, setDetailProduct] = useState([]);
  const {images, product_name,product_code, product_barcode, exp_day, exp_month, exp_year, price, stoc, category, product_listed_info, listed_date, other} = detailProduct;

 
  
  useEffect(() => {
    if (params._id) {
      products.forEach((product) => {
        if (product._id === params._id) setDetailProduct(product);
      });
    }
  }, [params._id, products]);

  if (detailProduct.length === 0) return null;
  
 

  return (
    <div className="viewProduct">
        <h2 id="productsheader">Details Product</h2>
        <div className="productView">
            <div className="img">
            <img src={images.url} alt={product_name} />
            </div>
            <div className="productViewAll">
                <div className="">
                    <h1 className="productheading">{product_name}</h1>
                    <p className="itemcode">Item code: <span>{product_code}</span> </p>
                    <p className="itemcode">Barcode: <span>{product_barcode}</span> </p>
                    <p className="itemcode">category: <span>{category}</span> </p>
                    <p className="itemcode">Expiry: <span>{exp_day}-{exp_month}-{exp_year}</span> </p>
                    <p className="itemcode">Stoc: <span>{stoc}</span> </p>
                    <h3 className="productPrice">{price}Tk</h3>
                    <div className="btndiv">
                        <button className="btnP edit">Edit</button>
                        <button className="btnP delete">Delete</button>
                    </div>
                </div>
                <div className="productInfoAdd">
                    <span className="levelP">Product Entry Information</span>
                    <div className="entryInfo">
                        <p>name: <span>{product_listed_info.name}</span></p>
                        <p id="stuffemailid">Stuff ID: <span>{product_listed_info.stuff_id} {product_listed_info.email}</span></p>
                        <p>listed Date: <span>{listed_date}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ViewProducts;
