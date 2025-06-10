import React from "react";

export const Tile = ({ item, itemType, isDuplicate }) => {
  return (
    <div className="tile-container">
      <h3>{item.name}</h3>
      <p>{item.phone}</p>
      <p>{item.email}</p>
      {isDuplicate && (
        <span className="duplicate-warning">Duplicate Contact</span>
      )}
    </div>
  );
};
