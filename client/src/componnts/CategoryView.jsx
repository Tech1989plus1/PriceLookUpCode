import React from 'react';
import CategoryItem from './CategoryItem.jsx';

const CategoryView = ({ department, items }) => {
  return(
    <div className="categoryContainer">
      <h3>{department}</h3>
      <ul className="listGroup">
        {items.map((item, key) => 
          <CategoryItem item={item} key={key}/>
        )}
      </ul>
    </div>
  );
};

export default CategoryView;
