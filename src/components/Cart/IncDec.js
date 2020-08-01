import React from "react";

export default function({ value, item }) {
  const { id, count } = item;
  const { increment, decrement } = value;
  return (
    <div className="">
      <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
        -
      </span>
      <span className="btn btn-black mx-1 MiddleButton" disabled>
        {count}
      </span>
      <span className="btn btn-black mx-1" onClick={() => increment(id)}>
        +
      </span>
    </div>
  );
}
