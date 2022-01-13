import React from "react";

function CustomerInfo() {
  return (
    <div className="col-md-2 mx-1 text-center h-100">
        <div
          className= "card mb-2 mx-auto"
          style={{
            maxWidth: "28rem",
            minWidth: "12rem",
            maxHeight: "14rem",
            minHeight: "2rem",
          }}
        >
          <div className="card-body w-100 border border-info rounded ratio" style={{"--bs-aspect-ratio": "50%"}}>
            <p className="text-secondary">
              8<br />
              VipCustomers
            </p>
          </div>
        </div>

      
        <div
          className= "card  mb-2 mx-auto"
          style={{
            maxWidth: "28rem",
            minWidth: "12rem",
            maxHeight: "14rem",
            minHeight: "2rem",
          }}
        >
          <div className= "card-body border border-primary rounded">
            <p className="text-secondary">
              10
              <br />
              Regular Customers
            </p>
          </div>
        </div>
      
        <div
          className= "card bg-white mb-2 mx-auto"
          style={{
            maxWidth: "28rem",
            minWidth: "12rem",
            maxHeight: "14rem",
            minHeight: "2rem",
          }}
        >
          <div className= "card-body border border-danger rounded">
            <p className="text-secondary">
              27
              <br />
              Risk Customers
            </p>
          </div>
        </div>
      
        <div
          className= "card bg-white mb-2 mx-auto"
          style={{
            maxWidth: "28rem",
            minWidth: "12rem",
            maxHeight: "14rem",
            minHeight: "2rem",
          }}
        >
          <div className= "card-body border border-warning rounded">
            <p className="text-secondary">
              1298
              <br />
              Lost Customers
            </p>
          </div>
        </div>
      </div>
  );
}

export default CustomerInfo;
