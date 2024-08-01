"use client";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

interface TasksMenuProps {
  items: MenuItem[];
  onClick: MenuProps["onClick"];
  current: string[];
  mode: "vertical" | "inline";
}

const TasksMenu: React.FC<TasksMenuProps> = ({
  items,
  onClick,
  current,
  mode,
}) => {
  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys={["firstGrade"]}
      selectedKeys={current}
      items={items}
      mode={mode}
      style={{
        width: mode === "inline" ? "100%" : "25%",
        flex: "auto",
        overflow: "auto",
        maxHeight: mode === "inline" ? "50vh" : "100vh",
      }}
    />
  );
};

export { TasksMenu };
