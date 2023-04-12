import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentCategory,
  setCurrentTag,
} from "../../redux/actions/blogFilterActions";
import FetchDataHandle from "../other/FetchDataHandle";
import Post from "../../components/post/Post";

const data = {
  categories: [
    { name: "Câu chuyện OC", value: "story" },
    { name: "Khuyến mãi", value: "sale" },
    { name: "Blog", value: "blog" },
    { name: "Đăng ký đại lý", value: "register" },
  ],
  tags: [
    { name: "Tất cả", value: "" },
    { name: "cauchuyen", value: "story" },
    { name: "khuyenmai", value: "sale" },
    { name: "blog", value: "blog" },
  ],
};

const BlogSidebarSection = ({ children, title, className }) => {
  return (
    <div className={`blog-sidebar-section ${classNames(className)}`}>
      <div className="blog-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="blog-sidebar-section__content">{children}</div>
    </div>
  );
};

function BlogSidebar({ recentPostsData }) {
  const dispatch = useDispatch();
  const blogFilterState = useSelector((state) => state.blogFilterReducer);
  const { category, tag } = blogFilterState;
  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentCategory(val));
  };
  const onChooseTag = (val) => {
    dispatch(setCurrentTag(val));
  };
  return (
    <div className="blog-sidebar">
      <BlogSidebarSection className="-categories" title="Danh mục">
        <ul>
          <li className={classNames({ active: category === "" })}>
            <a
              onClick={(e) => onChooseCategory(e, "")}
              href={process.env.PUBLIC_URL + "#"}
            >
              Trang chủ
            </a>
          </li>
          {data.categories.map((item, index) => (
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
      </BlogSidebarSection>
      <BlogSidebarSection className="-recent-post" title="Bài viết gần đây">
        <FetchDataHandle
          data={recentPostsData}
          renderData={(data) =>
            data.map((item, index) => (
              <Post key={index} type="tiny" data={item} />
            ))
          }
        />
      </BlogSidebarSection>
      <BlogSidebarSection className="-tags" title="Tags">
        {data.tags.map((item, index) => (
          <Button
            className={classNames({ active: tag === item.value })}
            onClick={() => onChooseTag(item.value)}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </BlogSidebarSection>
    </div>
  );
}

export default React.memo(BlogSidebar);
