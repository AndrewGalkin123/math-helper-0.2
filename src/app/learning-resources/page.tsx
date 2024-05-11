"use client";

import { Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps, MenuTheme } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Действительные числа",
    icon: <CalculatorOutlined />,
    children: [
      { key: "1", label: "Натуральные" },
      { key: "2", label: "Рациональные" },
      { key: "3", label: "Иррациональные" },
      { key: "4", label: "Действия с числами" },
    ],
  },
  {
    key: "sub2",
    label: "Проценты и пропорции",
    icon: <CalculatorOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
    ],
  },
  {
    key: "sub4",
    label: "Уравнения и неравенства",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub5",
    label: "Выражения и их преобразование",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub6",
    label: "Числовые последовательности",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub7",
    label: "Функции, их основные свойства",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub8",
    label: "Производная функции",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub9",
    label: "Первообразная и определенный интеграл",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub10",
    label: "Перестановки, комбинации, размещения ",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub11",
    label: "Элементарные геометрические фигуры",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub12",
    label: "Окружность и круг",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub13",
    label: "Треугольники",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub14",
    label: "Четырехугольники",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub15",
    label: "Многоугольники",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub16",
    label: "Геометрические величины и их измерения",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub17",
    label: "Координаты и векторы на плоскости",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub18",
    label: "Геометрические преобразования",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub19",
    label: "Прямые и плоскости в пространстве",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub20",
    label: "Многогранники, тела вращения",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub21",
    label: "Координаты и векторы в пространстве",
    icon: <CalculatorOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

export default function learningResources() {
  const [current, setCurrent] = useState("1");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <main>
      <Menu
        onClick={onClick}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        items={items}
        style={{ width: "25%", flex: "auto" }}
      />
    </main>
  );
}
