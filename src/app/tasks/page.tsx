"use client";
import { Tasks } from "../../../components/TasksPageComponents/Tasks/Tasks";
import { TasksMenu } from "../../../components/TasksPageComponents/TasksMenu/TasksMenu";
import { Searcher } from "../../../components/common/Search/Search";
import type { MenuProps } from "antd";
import items from "./TestsMenuItems";
import { useState } from "react";

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

export default function tasks() {
  const [currentTheme, setCurrentTheme] = useState("numbersOperationsUpTo10");
  const [searchedItems, setSearchedItems] = useState<MenuItem[]>(items);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTheme(e.key);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredItems = filterItems(items, value);
    setSearchedItems(filteredItems);
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

  return (
    <main>
      <Searcher onSearch={onSearch} />
      <div style={{ display: "flex" }}>
        <TasksMenu
          current={[currentTheme]}
          onClick={onClick}
          items={searchedItems}
        />
        <Tasks theme={currentTheme} />
      </div>
    </main>
  );
}
