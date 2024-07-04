import { CalculatorOutlined } from "@ant-design/icons";

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

const items: MenuItem[] = [
  {
    key: "firstGrade",
    label: "1 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "numbersOperationsUpTo10",
        label: "Сложение и вычитание до 10",
      },
      {
        key: "numbersComparisonsUpTo10",
        label: "Сравнение чисел до 10",
      },
      {
        key: "simpleProblems",
        label: "Решение простых задач",
      },
    ],
  },
  {
    key: "secondGrade",
    label: "2 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "multiplication",
        label: "Таблица умножения",
      },
      {
        key: "division",
        label: "Деление",
      },
      {
        key: "numbersOperationsUpTo100",
        label: "Сложение и вычитание до 100",
      },
    ],
  },
  {
    key: "thirdGrade",
    label: "3 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "divisionAndMultiplication",
        label: "Умножение и деление",
      },
      {
        key: "multi-digitNumbersOperations",
        label: "Сложение и вычитание многозначных чисел",
      },
      {
        key: "simpleEquations",
        label: "Простые уравнения",
      },
    ],
  },
  {
    key: "fourthGrade",
    label: "4 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "fractions",
        label: "Дроби",
      },
      {
        key: "perimeterAndArea",
        label: "Периметр и площадь",
      },
      {
        key: "multiplyingAndDividingMulti-digitNumbers",
        label: "Умножение и деление многозначных чисел",
      },
    ],
  },
  {
    key: "fifthGrade",
    label: "5 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "sixthGrade",
    label: "6 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "seventhGrade",
    label: "7 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "eighthGrade",
    label: "8 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "ninthGrade",
    label: "9 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "tenthGrade",
    label: "10 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "eleventhGrade",
    label: "11 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
];

export default items;
