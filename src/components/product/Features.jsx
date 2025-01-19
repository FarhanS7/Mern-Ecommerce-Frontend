import React from "react";
import FeaturesSkeleton from "../../skeleton/FeaturesSkeleton";
import FeatureStore from "../../store/FeatureStore";

const Features = () => {
  const { FeatureList } = FeatureStore();
  if (FeatureList === null) {
    return <FeaturesSkeleton />;
  }
  return <div></div>;
};

export default Features;
