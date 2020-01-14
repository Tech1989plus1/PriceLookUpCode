import React from 'react';

const CategoryView = ({ department, items }) => {
  return(
    <div className="categoryContainer">
      {console.log(items)}
      <h3>{department}</h3>
    </div>
  );
};

export default CategoryView;
