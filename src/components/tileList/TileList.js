import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items, title, itemType, isDuplicate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <Tile
            key={index}
            item={item}
            itemType={itemType}
            isDuplicate={isDuplicate}
          />
        ))}
      </ul>
    </div>
  );
};
