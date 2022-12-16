import React from "react";
import menulistStyles from "./menulistContent.css";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const FOOD = [
    { name: "pizza", desc: "a tasty pizza", price: 9.99 },
    { name: "burger", desc: "a tasty burger", price: 6.99 },
    { name: "sushi", desc: "a tasty sushi", price: 12.99 },
    { name: "chicken wings", desc: "a tasty chicken wings", price: 12.99 },
    { name: "menudito", desc: "a tasty menudito", price: 5.99 },
  ];

  return (
    <div className={menulistStyles.menulistContent}>
      <ul>
        COFFE
        <MenuItem
          itemName={FOOD[0].name}
          itemSize={FOOD[0].desc}
          itemPrice={FOOD[0].price}
        />
        <MenuItem
          itemName={FOOD[1].name}
          itemSize={FOOD[1].desc}
          itemPrice={FOOD[1].price}
        />
        <MenuItem
          itemName={FOOD[2].name}
          itemSize={FOOD[2].desc}
          itemPrice={FOOD[2].price}
        />
        <MenuItem
          itemName={FOOD[3].name}
          itemSize={FOOD[3].desc}
          itemPrice={FOOD[3].price}
        />
        <MenuItem
          itemName={FOOD[4].name}
          itemSize={FOOD[4].desc}
          itemPrice={FOOD[4].price}
        />
      </ul>
      ---------------
    </div>
  );
};

export default MenuList;
