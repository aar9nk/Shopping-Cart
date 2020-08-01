import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Desktop.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <a
          href="https://github.com/aar9nk1/ShoppingCart"
          taerget="_blank"
          rel="noopener noreferrer"
        >
          <img src={Logo} alt="logo." className="Logo" />
        </a>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-shopping-cart" />
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
  }
`;
