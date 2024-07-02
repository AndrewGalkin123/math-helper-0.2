import { CalculatorOutlined } from "@ant-design/icons";

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

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
      { key: "polygonElements", label: "Многоугольник и его элементы" },
      { key: "polygonPerimeter", label: "Периметр многоугольника" },
      {
        key: "regularPolygonProperties",
        label: "Правильный многоугольник и его свойства",
      },
      {
        key: "circumscribedInscribedPolygons",
        label:
          "Вписанные в окружность и описанные около окружности многоугольники",
      },
    ],
  },
  {
    key: "sub16",
    label: "Геометрические величины и их измерения",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "segmentCircleArcLength",
        label: "Длина отрезка, окружности и её дуги",
      },
      { key: "angleMeasurement", label: "Величина угла, измерение углов" },
      { key: "areaFormulas", label: "Формулы для вычисления площадей" },
    ],
  },
  {
    key: "sub17",
    label: "Координаты и векторы на плоскости",
    icon: <CalculatorOutlined />,
    children: [
      { key: "coordinateSystem", label: "Прямоугольная система координат" },
      {
        key: "distanceMidpoint",
        label: "Формула для вычисления расстояния между двумя точками",
      },
      { key: "lineCircleEquation", label: "Уравнение прямой и окружности" },
      {
        key: "vectorConcepts",
        label: "Понятие вектора, нулевого вектора, модуля вектора",
      },
      {
        key: "vectorTypes",
        label: "Коллинеарные векторы, противоположные векторы, равные векторы",
      },
      { key: "vectorCoordinates", label: "Координаты вектора" },
      {
        key: "vectorOperations",
        label: "Сложение и вычитание векторов, умножение вектора на число",
      },
      { key: "angleBetweenVectors", label: "Угол между векторами" },
      { key: "scalarProduct", label: "Скалярное произведение векторов" },
    ],
  },
  {
    key: "sub18",
    label: "Геометрические преобразования",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "geometricTransformations",
        label: "Основные виды геометрических преобразований на плоскости",
      },
      { key: "figureEquality", label: "Равенство фигур" },
    ],
  },
  {
    key: "sub19",
    label: "Прямые и плоскости в пространстве",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "stereometryAxiomsTheorems",
        label: "Аксиомы и теоремы стереометрии",
      },
      {
        key: "mutualPlacement",
        label: "Взаимное размещение прямых и плоскостей в пространстве",
      },
      { key: "parallelism", label: "Параллельность прямых и плоскостей" },
      { key: "parallelProjection", label: "Параллельное проектирование" },
      {
        key: "perpendicularity",
        label: "Перпендикулярность прямых и плоскостей",
      },
      {
        key: "threePerpendicularsTheorem",
        label: "Теорема о трех перпендикулярах",
      },
      { key: "distanceMeasurements", label: "Расстояния в пространстве" },
      { key: "anglesInSpace", label: "Углы в пространстве" },
      { key: "dihedralAngle", label: "Двугранный угол и его линейный угол" },
    ],
  },
  {
    key: "sub20",
    label: "Многогранники, тела вращения",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "polyhedraElementsTypes",
        label: "Многогранники и их элементы, основные виды многогранников",
      },
      {
        key: "solidBodiesRotation",
        label: "Тела вращения, основные виды тел и поверхностей вращения",
      },
      { key: "polyhedraSections", label: "Сечения многогранников" },
      { key: "cylinderConeSections", label: "Сечения цилиндра и конуса" },
      { key: "sphereSections", label: "Сечение шара плоскостью" },
      {
        key: "surfaceAreaVolumeFormulas",
        label:
          "Формулы для вычисления площадей поверхностей и объемов многогранников и тел вращения",
      },
    ],
  },
  {
    key: "sub21",
    label: "Координаты и векторы в пространстве",
    icon: <CalculatorOutlined />,
    children: [
      {
        key: "coordinateSystemMainInfo",
        label: "Прямоугольная система координат в пространстве",
      },
      {
        key: "vectorBasics",
        label: "Понятие вектор, модуль вектора, коллинеарные и равные векторы",
      },
      { key: "mainVectorOperations", label: "Операции с векторами" },
      { key: "vectorAngleSymmetry", label: "Угол между векторами и симметрия" },
    ],
  },
];

export default items;
