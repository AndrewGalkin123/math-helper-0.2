"use client";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

interface TasksMenuProps {
  items: MenuItem[];
}

const TasksMenu: React.FC<TasksMenuProps> = ({ items }) => {
  const [current, setCurrent] = useState("integers");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys={["sub1"]}
      selectedKeys={[current]}
      items={items}
      style={{ width: "25%", flex: "auto" }}
    />
  );
};

export { TasksMenu };
