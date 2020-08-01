import React from "react";
import IncDec from "./IncDec";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} className="ImageSmall image-fluid" alt="product." />
      </div>
      <div className="col-10 mx-auto col-lg-2">{title}</div>
      <div className="col-10 mx-auto col-lg-2">${price}</div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <IncDec key={item.id} item={item} value={value} />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">Total: ${total}</div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
    </div>
  );
}
