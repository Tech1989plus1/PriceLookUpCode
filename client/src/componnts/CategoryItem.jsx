import React from 'react';

const CategoryItem = ({ item }) => {
  return(
    <li className="group">Name: {item.name} Plu: {item.plu} Des.: {item.description}</li>
  );
};

export default CategoryItem;
