import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center">
        <h1 className="text-capitalize font-weight-bold">
          {name} {title}
        </h1>
      </div>
    </div>
  );
}
