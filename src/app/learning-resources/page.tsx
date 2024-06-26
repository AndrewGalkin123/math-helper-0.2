"use client";
import { Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { MainLearningInfo } from "../../../components/LearningResourcesComponents/MainLearningInfo/MainLearningInfo";
import { Searcher } from "../../../components/common/Search/Search";
import items from "./MenuItems";

export default function learningResources() {
  const [current, setCurrent] = useState("integers");
  const [searchedItems, setSearchedItems] = useState(items);
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(value)
    );
    setSearchedItems(filteredItems);
  };
  return (
    <main>
      <Searcher onSearch={onSearch} />
      <div style={{ display: "flex" }}>
        <Menu
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          items={searchedItems}
          style={{ width: "25%", flex: "auto" }}
        />
        <div style={{ width: "75%", flex: "auto", padding: "20px" }}>
          <MainLearningInfo theme={current} />
        </div>
      </div>
    </main>
  );
}
