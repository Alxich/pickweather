import React from "react";
import classnames from "classnames";

const Categories = ({
  categories,
  category,
  setCategorySelected,
}: {
  categories: any[];
  category: string | null;
  setCategorySelected: any;
}): JSX.Element => {
  const Element = ({ item, i }: { item: string; i: Number }) => {
    return (
      <li
        className={classnames({
          active: category && item.toLowerCase() === category,
        })}
        onClick={() => {
          setCategorySelected(item);
        }}
      >
        <span>{item}</span>
        <span className="arrow">{"<<<"}</span>
      </li>
    );
  };

  return (
    <div id="categories" className="content-weather">
      <div className="title">
        <h3>Categories</h3>
      </div>
      <ul>
        {categories &&
          categories.map((item: string, i: Number) => (
            <Element item={item} i={i} key={`${item}__${category}__${i}`} />
          ))}
      </ul>
    </div>
  );
};

export default Categories;
