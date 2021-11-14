import React from "react";
import ContentLoader from "react-content-loader";

const MealLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="17" rx="0" ry="0" width="285" height="305" />
  </ContentLoader>
)

export default MealLoader;