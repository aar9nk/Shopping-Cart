import React, { Component } from "react";
//react router adds some props that you can use easily
export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-10 mx-auto text-center text-title pt-5">
            <h1>404</h1>
            <h2>Page not found.</h2>
            <h3>
              The requested URL: {this.props.location.pathname} , was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
