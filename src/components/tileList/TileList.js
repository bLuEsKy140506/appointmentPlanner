import React from "react";
import { Tile } from "../tile/Tile";

export function TileList({ items, title, isDuplicate }) {
  console.log("TileList items:", items);
  return (
    <div className="tile-list">
      <h2>{title}</h2>
      <div className="tile-list-items">
        {items.map((item, index) => (
          <Tile
            key={`${title}-${index}`}
            item={item}
            isDuplicate={isDuplicate}
          />
        ))}
      </div>
    </div>
  );
}
