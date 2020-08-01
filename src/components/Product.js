import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product."
                    className="card-img-top ImageSmall"
                  />
                </Link>
                <button
                  className="cart-button"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="mb-0" disabled>
                      ✔
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-fex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: #000;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      boder: 0.04rem solid #000;
      box-shadow: 2px 2px 5px 0px #000;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-button {
    position: absolute;
    bottom: 0;
    padding: 0.5rem;
    background: #fff;
    border: none;
    color: #267af2;
    font-size: 1.5rem;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-button {
    transform: translate(0, 0);
  }

  .cart-button:hover {
    color: #32cd32;
  }
`;
