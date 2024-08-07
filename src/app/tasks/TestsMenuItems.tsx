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
    children: [
      {
        key: "divisionWithRemainder",
        label: "Деление с остатком",
      },
      {
        key: "decimals",
        label: "Десятичные дроби",
      },
    ],
  },
  {
    key: "sixthGrade",
    label: "6 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "relationshipsAndProportions",
        label: "Отношения и пропорции",
      },
      {
        key: "positiveAndNegativeNumbers",
        label: "Положительные и отрицательные числа",
      },
    ],
  },
  {
    key: "seventhGrade",
    label: "7 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "power",
        label: "Степень с натуральным показателем и её свойства",
      },
      {
        key: "monomials",
        label: "Одночлены",
      },
      {
        key: "polynomials",
        label: "Многочлены",
      },
    ],
  },
  {
    key: "eighthGrade",
    label: "8 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "quadraticEquations",
        label: "Квадратные уравнения",
      },
      {
        key: "inequalities",
        label: "Неравенства",
      },
    ],
  },
  {
    key: "ninthGrade",
    label: "9 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "numberSequences",
        label: "Числовые последовательности. Прогрессии",
      },
      {
        key: "combinatoricsStatisticsTheoryProbability",
        label: "Элементы комбинаторики, статистики и теории вероятностей",
      },
    ],
  },
  {
    key: "tenthGrade",
    label: "10 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "trigonometricEquations",
        label: "Тригонометрические уравнения",
      },
      {
        key: "derivative",
        label: "Производная и её применение",
      },
      {
        key: "mixingFormulas",
        label: "Формулы сведения",
      },
    ],
  },
  {
    key: "eleventhGrade",
    label: "11 класс",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "exponentialAndLogarithmicFunctions",
        label: "Показательная и логарифмическая функции",
      },
      {
        key: "initialAndIntegral",
        label: "Первоначальная функция и интеграл",
      },
      {
        key: "mathematicalStatistics",
        label: "Математическая статистика",
      },
    ],
  },
];

export default items;
