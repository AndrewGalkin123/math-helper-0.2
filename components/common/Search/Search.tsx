"use client";
import { Input } from "antd";
import { ChangeEventHandler, FC } from "react";

const { Search } = Input;

interface SearcherProps {
  onSearch: ChangeEventHandler<HTMLInputElement>;
}

const Searcher: FC<SearcherProps> = ({ onSearch }) => {
  return (
    <Search
      placeholder="Введите текст для поиска"
      onChange={onSearch}
      style={{ width: "100%", marginBottom: "20px" }}
    />
  );
};

export { Searcher };
