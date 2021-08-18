import React from "react";
import { useState } from "react";

function CartItems(props) {
  return (
    <div>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{props.data.title}</div>
          Rs. {props.data.Price}/-
        </div>

        <span
          onClick={() => {
            props.handleRemove(props.data.id);
          }}
          style={{ cursor: "pointer" }}
          class="badge bg-primary rounded-pill"
        >
          x
        </span>
      </li>
    </div>
  );
}

export default CartItems;
