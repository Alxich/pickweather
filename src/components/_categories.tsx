import { ReactElement } from "react";

const Categories = (): ReactElement => {
  return (
    <div id="categories" className="content-weather">
      <div className="title">
        <h3>Categories</h3>
      </div>
      <ul>
        <li>All</li>
        <li>National</li>
        <li>Business</li>
        <li>Sports</li>
        <li>World</li>
      </ul>
    </div>
  );
};

export default Categories;
