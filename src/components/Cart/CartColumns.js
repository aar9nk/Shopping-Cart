import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p>Products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>Name of Product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>Price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>Quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>Remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>Total</p>
          </div>
        </div>
      </div>
    );
  }
}
