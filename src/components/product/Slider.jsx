import React from "react";
import SliderSkeleton from "../../skeleton/SliderSkeleton";
import ProductStore from "../../store/ProductStore";

const Slider = () => {
  const { SliderList } = ProductStore();
  if (SliderList === null) {
    return <SliderSkeleton />;
  }

  return <div></div>;
};

export default Slider;
