import React from "react";
import "./UserInfo.css";
function UserInfo() {
  return (
      <>
    <div className="row">
      <div
        className = "card bg-white mb-2 mx-auto"
        style={{ maxWidth: "28rem", minWidth: "14rem" }}
      >
        <div className = "card-body">
          <div className="row">
            <h6 className = "card-title mr-auto">Total Customers</h6>
            <p className="ml-auto text-primary">1343</p>
          </div>
          <div className="row">
            <h6 className = "card-title mr-auto">New Customers</h6>
            <p className="ml-auto text-primary">218</p>
          </div>
        </div>
      </div>

      <div
        className = "card bg-white mb-2 mx-auto"
        style={{ maxWidth: "28rem", minWidth: "14rem" }}
      >
        <div className = "card-body">
          <div className="row">
            <h6 className = "card-title mr-auto">No. of Products</h6>
            <p className="ml-auto text-warning">7556</p>
          </div>
          <div className="row">
            <h6 className = "card-title mr-auto">New Products</h6>
            <p className="ml-auto text-warning">4095</p>
          </div>
        </div>
      </div>
      <div
        className = "card bg-white mb-2 mx-auto"
        style={{ maxWidth: "28rem", minWidth: "14rem" }}
      >
        <div className = "card-body">
          <div className="row">
            <h6 className = "card-title mr-auto">Total Income</h6>
            <p className="ml-auto text-success">78537.53</p>
          </div>
          <div className="row">
            <h6 className = "card-title mr-auto">vs Previous Month</h6>
            <p className="ml-auto text-danger">27.3%</p>
          </div>
        </div>
      </div>
      <div
        className = "card bg-white mb-2 mx-auto"
        style={{ maxWidth: "28rem", minWidth: "14rem" }}
      >
        <div className = "card-body">
          <div className="row">
            <h6 className = "card-title mr-auto"></h6>
            <p className="ml-auto"></p>
          </div>
          <div className="row">
            <h6 className = "card-title mr-auto"></h6>
            <p className="ml-auto"></p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
    <div
      className = "card bg-white mb-2 mx-auto"
      style={{ maxWidth: "28rem", minWidth: "14rem" }}
    >
      <div className = "card-body">
        <div className="row">
          <h6 className = "card-title mr-auto">No. of Suppliers</h6>
          <p className="ml-auto text-primary">1006</p>
        </div>
        <div className="row">
          <h6 className = "card-title mr-auto">New Suppliers</h6>
          <p className="ml-auto text-primary">106</p>
        </div>
      </div>
    </div>

    <div
      className = "card bg-white mb-2 mx-auto"
      style={{ maxWidth: "28rem", minWidth: "14rem" }}
    >
      <div className = "card-body">
        <div className="row">
          <h6 className = "card-title mr-auto">Stock in Amount</h6>
          <p className="ml-auto text-warning">-2</p>
        </div>
        <div className="row">
          <h6 className = "card-title mr-auto">Stock in Qty</h6>
          <p className="ml-auto text-warning">555678</p>
        </div>
      </div>
    </div>
    <div
      className = "card bg-white mb-2 mx-auto"
      style={{ maxWidth: "28rem", minWidth: "14rem" }}
    >
      <div className = "card-body">
        <div className="row">
          <h6 className = "card-title mr-auto">Net Profit</h6>
          <p className="ml-auto text-success">78537.53</p>
        </div>
        <div className="row">
          <h6 className = "card-title mr-auto">vs Previous Month</h6>
          <p className="ml-auto text-danger"></p>
        </div>
      </div>
    </div>
    <div
      className = "card bg-white mb-2 mx-auto"
      style={{ maxWidth: "28rem", minWidth: "14rem" }}
    >
      <div className = "card-body">
        <div className="row">
          <h6 className = "card-title mr-auto">Cash In Hand</h6>
          <p className="ml-auto text-info">1.03L</p>
        </div>
        <div className="row">
          <h6 className = "card-title mr-auto">Bank Accounts</h6>
          <p className="ml-auto text-info">-128.79C</p>
        </div>
      </div>
    </div>
  </div>
  </>
    
  );
}
export default UserInfo;
