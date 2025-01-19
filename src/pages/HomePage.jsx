import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Brands from "../components/product/Brands";
import Categories from "../components/product/Categories";
import Features from "../components/product/Features";
import Products from "../components/product/Products";
import Slider from "../components/product/Slider";
import FeatureStore from "../store/FeatureStore";
import ProductStore from "../store/ProductStore";

const HomePage = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();

  useEffect(() => {
    async () => {
      await BrandListRequest();
      await CategoryListRequest();
      await SliderListRequest();
      await ListByRemarkRequest("new");
      await FeatureListRequest();
    };
  }, []);

  return (
    <div>
      <Layout>
        <Slider />
        <Features />
        <Categories />
        <Products />
        <Brands />
      </Layout>
    </div>
  );
};

export default HomePage;
