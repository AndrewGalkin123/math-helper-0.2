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
    children: [],
  },
  {
    key: "secondGrade",
    label: "2 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "thirdGrade",
    label: "3 класс",
    icon: <CalculatorOutlined />,
    children: [],
  },
  {
    key: "fourthGrade",
    label: "4 класс",
    icon: <CalculatorOutlined />,
    children: [],
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
