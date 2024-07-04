"use client";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

interface TasksMenuProps {
  items: MenuItem[];
  onClick: MenuProps["onClick"];
  current: string[];
}

const TasksMenu: React.FC<TasksMenuProps> = ({ items, onClick, current }) => {
  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys={["firstGrade"]}
      selectedKeys={current}
      items={items}
      style={{ width: "25%", flex: "auto" }}
    />
  );
};

export { TasksMenu };
