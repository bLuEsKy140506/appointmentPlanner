import React from "react";

export const Tile = ({ item, itemType, isDuplicate }) => {
  return (
    <div className="tile-container">
      <h3>{item.name}</h3>
      <p>{item.phone}</p>
      <p>{item.email}</p>
      {/* {isDuplicate && (
        <span className="duplicate-warning">Duplicate Contact</span>
      )} */}
      <h3>{item.title}</h3>
      <p>{item.contact}</p>
      <p>{item.description}</p>
      <p>{item.date}</p>
      <p>{item.time}</p>
    </div>
  );
};
