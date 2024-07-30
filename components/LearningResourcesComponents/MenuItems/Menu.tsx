"use client";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

interface ItemsMenuProps {
  searchedItems: MenuItem[];
  onClick: MenuProps["onClick"];
  current: string;
  mode: "vertical" | "inline" | "horizontal";
}

const ItemsMenu: React.FC<ItemsMenuProps> = ({
  onClick,
  searchedItems,
  current,
  mode,
}) => {
  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys={["sub1"]}
      selectedKeys={[current]}
      items={searchedItems}
      mode={mode}
      style={{
        width: mode === "vertical" ? "100%" : "25%",
        flex: "auto",
        overflow: "auto",
        maxHeight: mode === "vertical" ? "50vh" : "100vh",
      }}
    />
  );
};

export { ItemsMenu };
