import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import {
  setCurrentColor,
  setCurrentCategory,
  setCurrentSize,
  setCurrentTag,
} from "../../redux/actions/shopFilterActions";
import categories from "../../data/categories.json";
import { Button } from "antd";

const data = {
  color: [
    { name: "Đen", colorCode: "#000", value: "black" },
    { name: "Nâu", colorCode: "#993300", value: "brown" },
    { name: "Xanh", colorCode: "#81D742", value: "green" },
    { name: "Vàng", colorCode: "#eeee22", value: "yellow" },
  ],
  size: [
    { name: "All size", value: "" },
    { name: "XL", value: "xl" },
    { name: "L", value: "l" },
    { name: "M", value: "m" },
    { name: "S", value: "s" },
  ],
  tags: [
    { name: "Tất cả", value: "" },
    { name: "Cà phê thải độc", value: "coffee" },
    { name: "Cà phê uống", value: "organic-coffee" },
  ],
};

const ShopSidebarSection = ({ children, title, className }) => {
  return (
    <div className={`shop-sidebar-section ${classNames(className)}`}>
      <div className="shop-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="shop-sidebar-section__content">{children}</div>
    </div>
  );
};

function ShopSidebar({ showShortcut, style }) {
  const dispatch = useDispatch();
  const shopFilterState = useSelector((state) => state.shopFilterReducer);
  const { category, color, size, tag } = shopFilterState;
  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentCategory(val));
  };
  const onChooseColor = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentColor(val));
  };
  const onChooseSize = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentSize(val));
  };
  const onChooseTag = (val) => {
    dispatch(setCurrentTag(val));
  };
  return (
    <div style={style} className="shop-sidebar">
      <ShopSidebarSection className="-departments" title="Danh mục">
        <ul>
          <li className={classNames({ active: category === "" })}>
            <a onClick={(e) => onChooseCategory(e, "")} href="#">
              Tất cả sản phẩm
            </a>
          </li>
          {categories.map((item, index) => (
            <li
              className={classNames({ active: category === item.value })}
              key={index}
            >
              <a onClick={(e) => onChooseCategory(e, item.value)} href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </ShopSidebarSection>
      {!showShortcut && (
        <>
          <ShopSidebarSection className="-colors" title="Cà phê phổ biến">
            <ul>
              {data.color.map((item, index) => (
                <li
                  className={classNames({ active: color === item.value })}
                  key={index}
                >
                  <a onClick={(e) => onChooseColor(e, item.value)} href="#">
                    <span style={{ backgroundColor: item.colorCode }}></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </ShopSidebarSection>
          {/* <ShopSidebarSection className="-size" title="Popular size">
            <ul>
              {data.size.map((item, index) => (
                <li
                  className={classNames({ active: size === item.value })}
                  key={index}
                >
                  <a onClick={(e) => onChooseSize(e, item.value)} href="#">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </ShopSidebarSection> */}
        </>
      )}

      <ShopSidebarSection className="-tags" title="Tags">
        {data.tags.map((item, index) => (
          <Button
            className={classNames({ active: tag === item.value })}
            onClick={() => onChooseTag(item.value)}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </ShopSidebarSection>
    </div>
  );
}

export default React.memo(ShopSidebar);
