import React from "react";
import { Link } from "react-router-dom";

const Expense = () => {
  return (
    <>
      <div className="expense">
        <div className="productsheader" id="ExpenseHeader">
          <span>Expense</span>
          <Link to="/Income" className="addProductBtn">
            Income
          </Link>
        </div>
        <div className="common-field">
          <div className="commonAmount">
            <h2>Total Expense</h2>
            <h1>TK. 123</h1>
            <div className="lastAmount">
              <p className="last-title">Last expenses</p>
              <div className="lastAmountItemContainer">
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">12000 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/" className="lastAmontItem">
                  <p className="amountWrapper">
                    <span>Tk.</span>
                    <span className="amountTk">120 </span>
                  </p>
                  <div className="amountItemBody">
                    <p className="amount-title">Sell a old Product</p>
                    <span>28-03-2022 04.12pm</span>
                  </div>
                </Link>
                <Link to="/expense-all" className="viewAll">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="addCommonAmount">
            <h3 className="addNew">Add new expense</h3>
            <hr className="hr" />
            <form action="">
              <label htmlFor="" className="productLabel">
                Title
              </label>
              <input
                type="text"
                className="inputItem"
                name="title"
                placeholder="Expense title"
              />
              <label htmlFor="" className="productLabel">
                Amount
              </label>
              <input
                type="number"
                className="inputItem"
                name="amount"
                placeholder="Incoming amount"
              />
              <label htmlFor="" className="productLabel">
                Note
              </label>
              <textarea
                name=""
                className="inputItem"
                id="textArea"
                placeholder="Something note here..."
              ></textarea>
              <button type="submit" className="btnSubmitCommon">
                Add New
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expense;
