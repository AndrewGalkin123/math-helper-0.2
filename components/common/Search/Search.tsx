"use client";
import { Input } from "antd";

const { Search } = Input;

const Searcher = () => {
  return (
    <Search
      placeholder="Введите текст для поиска"
      // onSearch={onSearch}
      style={{ width: "100%", marginBottom: "20px" }}
    />
  );
};

export { Searcher };
