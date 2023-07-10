import React, { useContext } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";

const Account = () => {
  const state = useContext(GlobalState);
  const [user] = state.userAPI.loginUser;

  const handleDegicnation = (user) => {
    if (user.role === 0) {
      return <span className="info-value"> Sales Executive</span>;
    }
    if (user.role === 1) {
      return <span className="info-value"> Asst. Deputy Manager</span>;
    }
    if (user.role === 2) {
      return <span className="info-value">Deputy Manager</span>;
    }
    if (user.role === 3) {
      return <span className="info-value">Manager</span>;
    }
  };
  const handleAccountStatus = (user) => {
    if (user.member_status === 0) {
      return (
        <span className="info-value acc-status unauthorized">Unauthorized</span>
      );
    }
    if (user.member_status === 1) {
      return <span className="info-value acc-status ac-active"> Active</span>;
    }
    if (user.member_status === 2) {
      return <span className="info-value acc-status disabled">Disabled</span>;
    }
  };

  return (
    <>
      <div className="account">
        <div className="productsheader" id="AccountHeader">
          <span>Account</span>
        </div>
        <div className="account-all">
          <div className="account-left">
            <div className="account-profile">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <div className="uploadAvater">
                <label htmlFor="file_up" className="upload">
                  <CloudUploadIcon />
                  <span>Upload</span>
                  <input type="file" name="file" id="file_up" />
                </label>
              </div>
            </div>
            <div className="account-info">
              <h1 className="acc-info-title">Account Information</h1>
              <div className="acc-all-info">
                <p className="acc-info-item">
                  <span className="info-label">Stuff ID</span>
                  <span className="info-value">{user.stuff_id}</span>
                </p>
                <p className="acc-info-item">
                  <span className="info-label">User Name</span>
                  <span className="info-value">{user.name}</span>
                </p>
                <p className="acc-info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{user.email}</span>
                </p>
                <p className="acc-info-item">
                  <span className="info-label">Mobile</span>
                  <span className="info-value">0{user.mobile}</span>
                </p>
                <p className="acc-info-item">
                  <span className="info-label">Date of birth</span>
                  <span className="info-value">{user.dob}</span>
                </p>
                <p className="acc-info-item">
                  <span className="info-label">Date of Joining</span>
                  <span className="info-value">{user.joining_date}</span>
                </p>
                <p className="acc-info-item">
                  <span className="info-label">Designation</span>
                  {handleDegicnation(user)}
                </p>
                <p className="acc-info-item">
                  <span className="info-label">Account Status</span>
                  {handleAccountStatus(user)}
                </p>
              </div>
            </div>
          </div>
          <div className="account-right">
            <form action="">
              <h1 className="cng-pass">Change Password</h1>
              <div className="input-field-acc">
                <label htmlFor="" className="productLabel">
                  Old Password
                </label>
                <input
                  type="text"
                  className="inputItem"
                  name="product_name"
                  autoComplete="off"
                />
                <label htmlFor="" className="productLabel">
                  New Password
                </label>
                <input
                  type="text"
                  className="inputItem"
                  name="product_name"
                  autoComplete="off"
                />
                <label htmlFor="" className="productLabel">
                  Confrim Password
                </label>
                <input
                  type="text"
                  className="inputItem"
                  name="product_name"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btnSubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
