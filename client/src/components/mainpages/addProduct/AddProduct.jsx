import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const state = useContext(GlobalState);
  const [images, setImages] = useState(false);
  const [token] = state.token;
  const [loginUser] = state.userAPI.loginUser;

  const d = new Date();

  const [product, setProduct] = useState({
    product_name: "",
    product_code: "",
    product_barcode: "",
    exp_day: "",
    exp_month: "",
    exp_year: "",
    price: "",
    stoc: "",
    category: "",
    other: {},
    images: {},
    product_listed_info: {
      name: loginUser.name,
      email: loginUser.email,
      mobile: loginUser.mobile,
      stuff_id: loginUser.stuff_id,
      _id: loginUser._id,
    },
    listed_date: d.toLocaleString(),
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) return alert("File not exist.");

      if (file.size > 3 * 1024 * 1024)
        // 1mb
        return alert("Size too large");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("File formet is incorrect");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/products",
        { ...product, images },
        {
          headers: { Authorization: token },
        }
      );
      alert("Product Upload Successfull!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="add-product">
      <div className="productsheader" id="productHeader">
        <span>Products</span>
        <Link to="/products" className="addProductBtn">
          All Products
        </Link>
      </div>
      <form className="productContainer" onSubmit={handleSubmit}>
        <div className="left">
          <img
            src={
              images
                ? images.url
                : "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            }
            alt=""
          />
          <div className="uploadDelete">
            <label htmlFor="file_up" className="upload">
              <CloudUploadIcon />
              <span>Upload</span>
              <input
                type="file"
                name="file"
                id="file_up"
                onChange={handleUpload}
              />
            </label>
            <p className="delete" onClick={handleDestroy}>
              <DeleteIcon />
              <span>Delete</span>
            </p>
          </div>
        </div>
        <div className="right">
          <div className="productLeft">
            <label htmlFor="" className="productLabel">
              Product Name
            </label>
            <input
              type="text"
              className="inputItem"
              name="product_name"
              placeholder="Product Name"
              value={product.product_name}
              onChange={handleChangeInput}
            />
            <label htmlFor="" className="productLabel">
              Product Code
            </label>
            <input
              type="number"
              className="inputItem"
              name="product_code"
              placeholder="Product Code"
              value={product.product_code}
              onChange={handleChangeInput}
            />
            <label htmlFor="" className="productLabel">
              Product Barcode
            </label>
            <input
              type="number"
              className="inputItem"
              name="product_barcode"
              placeholder="Product Barcode"
              value={product.product_barcode}
              onChange={handleChangeInput}
            />
            <label htmlFor="" className="productLabel">
              Catagory
            </label>
            <select
              name="category"
              className="inputItem"
              value={product.category}
              onChange={handleChangeInput}
            >
              <option className="inputItem" value="">
                Category
              </option>
              <option value="food">Food</option>
              <option value="fashion">Fashion</option>
              <option value="goods">Goods</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="productRight">
            <label htmlFor="" className="productLabel">
              Expiry
            </label>
            <div className="expField">
              <input
                type="number"
                name="exp_day"
                className="inputItem"
                placeholder="Day"
                value={product.exp_day}
                onChange={handleChangeInput}
              />
              <input
                type="number"
                className="inputItem"
                name="exp_month"
                placeholder="Month"
                value={product.exp_month}
                onChange={handleChangeInput}
              />
              <input
                type="number"
                name="exp_year"
                placeholder="Year"
                className="inputItem"
                value={product.exp_year}
                onChange={handleChangeInput}
              />
            </div>
            <label htmlFor="" className="productLabel">
              Price
            </label>
            <input
              type="number"
              className="inputItem"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChangeInput}
            />
            <label htmlFor="" className="productLabel">
              Stoc
            </label>
            <input
              type="number"
              className="inputItem"
              name="stoc"
              placeholder="Stoc"
              value={product.stoc}
              onChange={handleChangeInput}
            />
            <button type="submit" className="btnSubmit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
