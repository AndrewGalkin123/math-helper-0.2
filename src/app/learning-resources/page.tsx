"use client";

import React, { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { MainLearningInfo } from "../../../components/LearningResourcesComponents/MainLearningInfo/MainLearningInfo";
import { Searcher } from "../../../components/common/Search/Search";
import items from "./MenuItems";
import { ItemsMenu } from "../../../components/LearningResourcesComponents/MenuItems/Menu";

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

export default function learningResources() {
  const [current, setCurrent] = useState("integers");
  const [searchedItems, setSearchedItems] = useState(items);
  const [menuMode, setMenuMode] = useState<
    "vertical" | "inline" | "horizontal"
  >("inline");

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

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMenuMode("vertical");
    } else {
      setMenuMode("inline");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <Searcher onSearch={onSearch} />
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
        }}
      >
        <ItemsMenu
          onClick={onClick}
          searchedItems={searchedItems}
          current={current}
          mode={menuMode}
        />
        <MainLearningInfo theme={current} />
      </div>
    </main>
  );
}
