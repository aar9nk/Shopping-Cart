import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-cemter my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={img}
                    className="img-fluid ImageMedium"
                    alt="product."
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4 className="text-muted mt-3 mb-2">{company}</h4>
                  <h4>Price: ${price}</h4>
                  <p>{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? " ✔ Added to Cart" : "Add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
