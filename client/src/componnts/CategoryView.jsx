import React from 'react';
import CategoryItem from './CategoryItem.jsx';

const CategoryView = ({ department, items }) => {
  return(
    <div className="categoryContainer">
      <h3>{department}</h3>
      {items.map((item, key) => 
        <CategoryItem item={item} key={key}/>
      )}
    </div>
  );
};

export default CategoryView;
