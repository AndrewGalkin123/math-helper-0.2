"use client";
import { Tasks } from "../../../components/TasksPageComponents/Tasks/Tasks";
import { TasksMenu } from "../../../components/TasksPageComponents/TasksMenu/TasksMenu";
import { Searcher } from "../../../components/common/Search/Search";
import type { MenuProps } from "antd";
import items from "./TestsMenuItems";
import { useState } from "react";

export default function tasks() {
  const [currentTheme, setCurrentTheme] = useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTheme(e.key);
  };
  const onSearch = () => {};
  return (
    <main>
      <Searcher onSearch={onSearch} />
      <div style={{ display: "flex" }}>
        <TasksMenu current={[currentTheme]} onClick={onClick} items={items} />
        <Tasks theme={currentTheme} />
      </div>
    </main>
  );
}
