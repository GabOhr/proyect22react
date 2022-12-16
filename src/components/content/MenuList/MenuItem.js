import React from "react";

function MenuItem({ itemName, itemSize, itemPrice }) {
  return (
    <li>
      {itemName} {itemSize} {itemPrice}
    </li>
  );
}

export default MenuItem;
