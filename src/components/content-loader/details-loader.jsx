import React from "react";
import ContentLoader from "react-content-loader";

const DetailsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="17" rx="0" ry="0" width="550" height="550" /> 
    <rect x="244" y="15" rx="0" ry="0" width="250" height="170" /> 
    <rect x="245" y="138" rx="0" ry="0" width="430" height="250" />
  </ContentLoader>
)

export default DetailsLoader;