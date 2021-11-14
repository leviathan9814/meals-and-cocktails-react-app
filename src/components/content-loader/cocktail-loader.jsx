import React from "react";
import ContentLoader from "react-content-loader";

const CocktailLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="17" rx="0" ry="0" width="430" height="480" />
  </ContentLoader>
)

export default CocktailLoader;