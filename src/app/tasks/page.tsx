"use client";
import { Tasks } from "../../../components/TasksPageComponents/Tasks/Tasks";
import { TasksMenu } from "../../../components/TasksPageComponents/TasksMenu/TasksMenu";
import { Searcher } from "../../../components/common/Search/Search";
import items from "./TestsMenuItems";

export default function tasks() {
  const onSearch = () => {};
  return (
    <main>
      <Searcher onSearch={onSearch} />
      <div style={{ display: "flex" }}>
        <TasksMenu items={items} />
        <Tasks theme={"das"} />
      </div>
    </main>
  );
}
