import React from "react";
import Layout from "../components/layout/Layout";
import BrandsSkeleton from "../skeleton/BrandsSkeleton";
import CategorySkeleton from "../skeleton/CategorySkeleton";
import FeaturesSkeleton from "../skeleton/FeaturesSkeleton";
import ProductsSkeleton from "../skeleton/ProductsSkeleton";
import SliderSkeleton from "../skeleton/SliderSkeleton";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <SliderSkeleton />
        <FeaturesSkeleton />
        <CategorySkeleton />
        <ProductsSkeleton />
        <BrandsSkeleton />
      </Layout>
    </div>
  );
};

export default HomePage;
