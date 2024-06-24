"use client";

import { Menu, Input } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";
import { MainLearningInfo } from "../../../components/LearningResourcesComponents/MainLearningInfo/MainLearningInfo";
import { Searcher } from "../../../components/common/Search/Search";

type MenuItem = Required<MenuProps>["items"][number];
const { Search } = Input;

const items: MenuItem[] = [
  {
    key: "Real numbers",
    label: "Действительные числа",
    icon: <CalculatorOutlined />,
    children: [
      { key: "integers", label: "Натуральные" },
      { key: "rational-numbers", label: "Рациональные" },
      { key: "irrational", label: "Иррациональные" },
      { key: "actions-with-numbers", label: "Действия с числами" },
      {
        key: "real-number-comparisons",
        label: "Правила сравнения действительных чисел",
      },
      {
        key: "signs-of-numbers-divisibility",
        label: "Признаки делимости чисел на 2, 3, 5, 9, 10",
      },
      { key: "rounding-numbers", label: "Правила округления чисел" },
      { key: "roots-properties", label: "Свойства корней" },
      { key: "numeric-intervals", label: "Числовые промежутки" },
      {
        key: "the-absolute-value",
        label: "Модуль действительного числа и его свойства",
      },
    ],
  },
  {
    key: "sub2",
    label: "Проценты и пропорции",
    icon: <CalculatorOutlined />,
    children: [
      { key: "proportions", label: "Отношения, пропорции" },
      { key: "definition-of-percentage", label: "Определение процента" },
    ],
  },
  {
    key: "sub4",
    label: "Уравнения и неравенства",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "one-variable-equation",
        label: "Уравнение с одной переменной",
      },
      {
        key: "one-variable-inequality",
        label: "Неравенство с одной переменной",
      },
      {
        key: "equations-system",
        label: "Определение решения системы уравнений",
      },
      {
        key: "equations",
        label:
          "Методы решения простейших рациональных, иррациональных, показательных, логарифмических, тригонометрических уравнений",
      },
      {
        key: "inequality",
        label:
          "Методы решения простейших линейных, квадратных, рациональных, показательных, логарифмических неравенств",
      },
    ],
  },
  {
    key: "sub5",
    label: "Выражения и их преобразование",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "identities",
        label:
          "Определение тождественно равных выражений, тождественного преобразования выражения, тождества",
      },
      {
        key: "monomial-polynomial",
        label: "Определение одночлена и многочлена",
      },
      {
        key: "monomial-polynomial-operations",
        label:
          "Правила сложения, вычитания и умножения одночленов и многочленов",
      },
      {
        key: "fractional-rational",
        label:
          "Правила выполнения действий с дробными рациональными выражениями",
      },
      { key: "logarithm", label: "Определение и свойства логарифма" },
      {
        key: "periodic-functions",
        label: "Определение синуса, косинуса, тангенса числового аргумента",
      },
      { key: "mixing-formulas", label: "Формулы сведения" },
    ],
  },
  {
    key: "sub6",
    label: "Числовые последовательности",
    icon: <CalculatorOutlined />,
    children: [
      { key: "arithmetic-progression", label: "Арифметическая прогрессия" },
      { key: "geometric-progression", label: "Геометрическая прогрессия" },
    ],
  },
  {
    key: "sub7",
    label: "Функции, их основные свойства",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "function-definition",
        label:
          "Определение функции, области определения, области значений функции, график функции",
      },
      {
        key: "function-representation",
        label: "Способы задания функций, основные свойства и графики функций",
      },
    ],
  },
  {
    key: "sub8",
    label: "Производная функции",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "derivative-definition",
        label: "Определение производной функции в точке",
      },
      {
        key: "derivative-meaning",
        label: "Физический и геометрический смысл производной",
      },
      { key: "derivative-table", label: "Таблица производных функций" },
      {
        key: "derivative-rules",
        label:
          "Правила нахождения производной суммы, произведения, частного двух функций",
      },
      {
        key: "function-growth-conditions",
        label: "Достаточное условие роста (убывания) функции на промежутке",
      },
      {
        key: "extrema",
        label: "Экстремумы функции",
      },
      ,
      {
        key: "function-values",
        label: "Определение наибольшего и наименьшего значений функции",
      },
    ],
  },
  {
    key: "sub9",
    label: "Первообразная и определенный интеграл",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "antiderivative-definition",
        label:
          "Определение первообразной функции, определенного интеграла, криволинейной трапеции",
      },
      { key: "antiderivative-table", label: "Таблица первообразных функций" },
      {
        key: "antiderivative-rules",
        label: "Правила нахождения первообразных",
      },
    ],
  },
  {
    key: "sub10",
    label: "Перестановки, комбинации, размещения ",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "permutations-combinations-arrangements",
        label:
          "Определение перестановки, комбинации, размещения (без повторений)",
      },
      {
        key: "combinatorial-rules",
        label: "Комбинаторные правила суммы и произведения",
      },
      {
        key: "probability-definition",
        label: "Классическое определение вероятности события",
      },
      {
        key: "sample-characteristics",
        label: "Определение выборочных характеристик рядов данных",
      },
      {
        key: "data-representation",
        label:
          "Графическая, табличная, текстовая и другие формы представления статистических данных",
      },
    ],
  },
  {
    key: "sub11",
    label: "Элементарные геометрические фигуры",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "basic-geometry-concepts",
        label: "Понятие точки и прямой, луча, отрезка, ломаной, угла",
      },
      { key: "planimetry-axioms", label: "Аксиомы планиметрии" },
      {
        key: "angles-and-bisectors",
        label: "Смежные и вертикальные углы, биссектриса угла",
      },
      {
        key: "parallelAndPerpendicularLines",
        label: "Параллельные и перпендикулярные прямые",
      },
      { key: "parallelLinesCriteria", label: "Признаки параллельности прямых" },
      {
        key: "thalesTheorem",
        label: "Теорема Фалеса, обобщенная теорема Фалеса",
      },
    ],
  },
  {
    key: "sub12",
    label: "Окружность и круг",
    icon: <CalculatorOutlined />,
    children: [
      { key: "circleElements", label: "Круг, окружность и их элементы" },
      {
        key: "anglesProperties",
        label: "Центральные, вписанные углы и их свойства",
      },
      {
        key: "tangentProperties",
        label: "Касательная к окружности и ее свойства",
      },
    ],
  },
  {
    key: "sub13",
    label: "Треугольники",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "typesOfTriangles",
        label: "Виды треугольников и их основные свойства",
      },
      {
        key: "triangleCongruenceCriteria",
        label: "Признаки равенства треугольников",
      },
      {
        key: "mediansBisectorsAltitudes",
        label: "Медиана, биссектриса, высота треугольника и их свойства",
      },
      {
        key: "triangleMidline",
        label: "Средняя линия треугольника и ее свойства",
      },
      {
        key: "triangleCircles",
        label:
          "Окружность, описанная около треугольника, и окружность, вписанная в треугольник",
      },
      { key: "pythagoreanTheorem", label: "Теорема Пифагора" },
      {
        key: "rightTriangleRelations",
        label:
          "Соотношение между сторонами и углами прямоугольного треугольника",
      },
      { key: "sineTheorem", label: "Теорема синусов" },
      { key: "cosineTheorem", label: "Теорема косинусов" },
      {
        key: "similarTriangles",
        label: "Подобные треугольники, признаки подобия треугольников",
      },
    ],
  },
  {
    key: "sub14",
    label: "Четырехугольники",
    icon: <CalculatorOutlined />,
    children: [
      { key: "quadrilateralElements", label: "Четырехугольник и его элементы" },
      {
        key: "parallelogramProperties",
        label: "Параллелограмм, его свойства и признаки",
      },
      {
        key: "rectangle-rhombus-square",
        label: "Прямоугольник, ромб, квадрат и их свойства",
      },
      {
        key: "trapezoidMidline",
        label: "Трапеция, средняя линия трапеции свойства",
      },
      {
        key: "circumscribedInscribedQuadrilaterals",
        label:
          "Вписанные в окружность и описанные около окружности четырехугольники",
      },
      { key: "quadrilateralAnglesSum", label: "Сумма углов четырехугольника" },
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
  const [current, setCurrent] = useState("integers");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <main>
      <Searcher />
      <div style={{ display: "flex" }}>
        <Menu
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          items={items}
          style={{ width: "25%", flex: "auto" }}
        />
        <div style={{ width: "75%", flex: "auto", padding: "20px" }}>
          <MainLearningInfo theme={current} />
        </div>
      </div>
    </main>
  );
}
