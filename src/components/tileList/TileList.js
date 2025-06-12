import React from "react";
// import { Tile } from "../tile/Tile";

export function TileList({ items, title, itemType }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="tile-list">
        {items.map((item, index) => (
          <div key={index} className="tile">
            <h3>{item.name}</h3>
            <p>{item.phone}</p>
            <p>{item.email}</p>
            {/* Add more item properties as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
