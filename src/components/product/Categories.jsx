import React from "react";
import CategorySkeleton from "../../skeleton/CategorySkeleton";
import ProductStore from "../../store/ProductStore";
const Categories = () => {
  const { CategoryList } = ProductStore();
  if (CategoryList === null) {
    return <CategorySkeleton />;
  }
  return <div></div>;
};

export default Categories;
