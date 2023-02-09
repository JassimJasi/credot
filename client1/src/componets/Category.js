import React from "react";

function Category() {
  return (
    <div className="category_section">
      <div className="category_card1">
        <h2>Watch</h2>
      </div>
      <div className="category_card2" style={{ backgroundColor: "red" }}>
        <h2>Bag</h2>
      </div>
      <div className="category_card3" style={{ backgroundColor: "blue" }}>
        <h2>Shoes</h2>
      </div>
    </div>
  );
}

export default Category;
