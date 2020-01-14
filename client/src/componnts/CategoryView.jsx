import React from 'react';

const CategoryView = ({ department }) => {
  return(
    <div className="categoryContainer">
      <h3>{department}</h3>
    </div>
  );
};

export default CategoryView;
