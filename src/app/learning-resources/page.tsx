"use client";
import { Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { MainLearningInfo } from "../../../components/LearningResourcesComponents/MainLearningInfo/MainLearningInfo";
import { Searcher } from "../../../components/common/Search/Search";
import items from "./MenuItems";

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

export default function learningResources() {
  const [current, setCurrent] = useState("integers");
  const [searchedItems, setSearchedItems] = useState(items);
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const filterItems = (
    menuItems: MenuItem[],
    searchTerm: string
  ): MenuItem[] => {
    return menuItems
      .map((item) => {
        if (item.label.toLowerCase().includes(searchTerm)) {
          return item;
        }

        if (item.children) {
          const filteredChildren = filterItems(item.children, searchTerm);
          if (filteredChildren.length > 0) {
            return { ...item, children: filteredChildren };
          }
        }

        return null;
      })
      .filter((item) => item !== null) as MenuItem[];
  };
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredItems = filterItems(items, value);
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
