import "./Themes.css";

const Themes: React.FC = () => {
  return (
    <div className="themes">
      <h1>Что нужно знать?</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Тема</td>
            <td>Что нужно знать?</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ fontWeight: "500", fontSize: "20px" }}>Алгебра</td>
            <td></td>
          </tr>
          <tr>
            <td>
              Действительные числа (натуральные, рациональные и иррациональные),
              сравнение чисел и действия с ними
            </td>
            <td>
              <ul>
                <li>свойства действий с действительными числами;</li>
                <li>правила сравнения действительных чисел;</li>
                <li>признаки делимости чисел на 2, 3, 5, 9, 10;</li>
                <li>
                  правила нахождения наибольшего общего делителя и наименьшего
                  общего кратного числа;
                </li>
                <li>правила округления целых чисел и десятичных дробей;</li>
                <li>
                  определение корня n-й степени и арифметического корня n-й
                  степени;
                </li>
                <li>свойства корней;</li>
                <li>
                  определение степени по натуральным, целым и рациональным
                  показателям, их свойства;
                </li>
                <li>числовые промежутки;</li>
                <li>модуль действительного числа и его свойства.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Отношения и пропорции. Проценты. Основные задачи на проценты.
              Текстовые задачи
            </td>
            <td>
              <ul>
                <li>отношения, пропорции;</li>
                <li>основное свойство, пропорции;</li>
                <li>определение процента;</li>
                <li>правила выполнения процентных расчетов.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Рациональные, иррациональные, степенные, показательные,
              логарифмические, тригонометрические выражения и их преобразование
            </td>
            <td>
              <ul>
                <li>
                  определение тождественно равных выражений, тождественного
                  преобразования выражения, тождества;
                </li>
                <li>определение одночлена и многочлена;</li>
                <li>
                  правила сложения, вычитания и умножения одночленов и
                  многочленов;
                </li>
                <li>формулы сокращенного умножения;</li>
                <li>расписание многочлена на множители;</li>
                <li>определение дробного рационального выражения;</li>
                <li>
                  правила выполнения действий с дробными рациональными
                  выражениями;
                </li>
                <li>определение и свойства логарифма;</li>
                <li>основное логарифмическое тождество;</li>
                <li>
                  определение синуса, косинуса, тангенса числового аргумента;
                </li>
                <li>
                  основные соотношения между тригонометрическими функциями
                  одного аргумента;
                </li>
                <li>формулы сведения;</li>
                <li>формулы сложения и следствия из них.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Линейные, квадратные, рациональные, иррациональные, показательные,
              логарифмические, тригонометрические уравнения и неравенства.
              Системы линейных уравнений и неравенств. Системы уравнений, в
              которых хотя бы одно уравнение второй степени. Решение текстовых
              задач с помощью уравнений и их систем
            </td>
            <td>
              <ul>
                <li>
                  уравнение с одной переменной, определение корня (решения)
                  уравнения с одной переменной;
                </li>
                <li>
                  неравенство с одной переменной, определение решения
                  неравенства с одной переменной;
                </li>
                <li>
                  определение решения системы уравнений, основные методы решения
                  систем;
                </li>
                <li>
                  методы решения простейших рациональных, иррациональных,
                  показательных, логарифмических, тригонометрических уравнений и
                  несложных уравнений, которые сводятся к простейшим;
                </li>
                <li>
                  методы решения простейших линейных, квадратных, рациональных,
                  показательных, логарифмических неравенств, которые сводятся к
                  простейшим.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Числовые последовательности</td>
            <td>
              <ul>
                <li>определение арифметической и геометрической прогрессий;</li>
                <li>
                  формулы n-го члена арифметической и геометрической прогрессий;
                </li>
                <li>
                  формулы суммы n первых членов арифметической и геометрической
                  прогрессий.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Функциональная зависимость. Линейные, квадратные, степенные,
              показательные, логарифмические и тригонометрические функции, их
              основные свойства
            </td>
            <td>
              <ul>
                <li>
                  определение функции, области определения, области значений
                  функции, график функции;
                </li>
                <li>
                  способы задания функций, основные свойства и графики функций.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Производная функции, ее геометрический и физический смысл. Таблица
              производных и правила дифференцирования. Исследование функции с
              помощью производной. Построение графиков функций
            </td>
            <td>
              <ul>
                <li>определение производной функции в точке;</li>
                <li>физический и геометрический смысл производной;</li>
                <li>таблица производных функций;</li>
                <li>
                  правила нахождения производной суммы, произведения, доли двух
                  функций;
                </li>
                <li>
                  достаточное условие роста (убывания) функции на промежутке;
                </li>
                <li>экстремумы функции;</li>
                <li>определение наибольшего и наименьшего значений функции.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Первообразная и определенный интеграл. Применение определенного
              интеграла для вычисления площадей плоских фигур
            </td>
            <td>
              <ul>
                <li>
                  определение первообразной функции, определенного интеграла,
                  криволинейной трапеции;
                </li>
                <li>таблица первообразных функций;</li>
                <li>правила нахождения первообразных.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Перестановки, комбинации, размещения (без повторений).
              Комбинаторные правила суммы и произведения. Вероятность случайного
              события. Выборочные характеристики
            </td>
            <td>
              <ul>
                <li>
                  определение перестановки, комбинации, размещения (без
                  повторений);
                </li>
                <li>комбинаторные правила суммы и произведения;</li>
                <li>классическое определение вероятности события;</li>
                <li>
                  определение выборочных характеристик рядов данных (размаха
                  выборки, моды, медианы, среднего значения);
                </li>
                <li>
                  графическая, табличная, текстовая и другие формы представления
                  статистических данных.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "500", fontSize: "20px" }}>Геометрия</td>
            <td></td>
          </tr>
          <tr>
            <td>
              Элементарные геометрические фигуры на плоскости и их свойства
            </td>
            <td>
              <ul>
                <li>понятие точки и прямой, луча, отрезка, ломаной, угла;</li>
                <li>аксиомы планиметрии;</li>
                <li>смежные и вертикальные углы, биссектриса угла;</li>
                <li>свойства смежных и вертикальных углов;</li>
                <li>параллельные и перпендикулярные прямые;</li>
                <li>
                  расстояние между параллельными прямыми; перпендикуляр и
                  наклонная, срединный
                </li>
                <li>перпендикуляр, расстояние от точки до прямой;</li>
                <li>признаки параллельности прямых;</li>
                <li>теорема Фалеса, обобщенная теорема Фалеса.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Окружность и круг</td>
            <td>
              <ul>
                <li>круг, окружность и их элементы;</li>
                <li>центральные, вписанные углы и их свойства;</li>
                <li>касательная к окружности и ее свойства.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Треугольники</td>
            <td>
              <ul>
                <li>виды треугольников и их основные свойства;</li>
                <li>признаки равенства треугольников;</li>
                <li>
                  медиана, биссектриса, высота треугольника и их свойства;
                </li>
                <li>теорема о сумме углов треугольника;</li>
                <li>неравенство треугольника;</li>
                <li>средняя линия треугольника и ее свойства;</li>
                <li>
                  окружность, описанная около треугольника, и окружность,
                  вписанная в треугольник;
                </li>
                <li>теорема Пифагора;</li>
                <li>
                  соотношение между сторонами и углами прямоугольного
                  треугольника;
                </li>
                <li>теорема синусов;</li>
                <li>теорема косинусов;</li>
                <li>подобные треугольники, признаки подобия треугольников.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Четырехугольники</td>
            <td>
              <ul>
                <li>четырехугольник и его элементы;</li>
                <li>параллелограмм, его свойства и признаки;</li>
                <li>прямоугольник, ромб, квадрат и их свойства;</li>
                <li>трапеция, средняя линия трапеции свойства;</li>
                <li>
                  вписанные в окружность и описанные около окружности
                  четырехугольники;
                </li>
                <li>сумма углов четырехугольника.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Многоугольники</td>
            <td>
              <ul>
                <li>многоугольник и его элементы;</li>
                <li>периметр многоугольника;</li>
                <li>правильный многоугольник и его свойства;</li>
                <li>
                  вписанные в окружность и описанные около окружности
                  многоугольники.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Геометрические величины и их измерения</td>
            <td>
              <ul>
                <li>длина отрезка, окружности и ее дуги;</li>
                <li>величина угла, измерение углов;</li>
                <li>
                  формулы для вычисления площадей треугольника, параллелограмма,
                  ромба, квадрата, трапеции, правильного многоугольника, круга,
                  сектора.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Координаты и векторы на плоскости</td>
            <td>
              <ul>
                <li>
                  прямоугольная система координат на плоскости, координаты
                  точки;
                </li>
                <li>
                  формула для вычисления расстояния между двумя точками и
                  формула для вычисления координат середины отрезка;
                </li>
                <li>уравнение прямой и окружности;</li>
                <li>понятие вектора, нулевого вектора, модуля вектора;</li>
                <li>
                  коллинеарные векторы, противоположные векторы, равные векторы;
                </li>
                <li>координаты вектора;</li>
                <li>
                  сложение и вычитание векторов, умножение вектора на число;
                </li>
                <li>угол между векторами;</li>
                <li>скалярное произведение векторов.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Геометрические преобразования</td>
            <td>
              <ul>
                <li>
                  основные виды геометрических преобразований на плоскости
                  (движение, симметрия относительно точки и относительно прямой,
                  поворот, параллельный перенос);
                </li>
                <li>равенство фигур.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Прямые и плоскости в пространстве</td>
            <td>
              <ul>
                <li>аксиомы и теоремы стереометрии;</li>
                <li>
                  взаимное размещение прямых в пространстве, прямой и плоскости
                  в пространстве, плоскостей в пространстве;
                </li>
                <li>параллельность прямых, прямой и плоскости, плоскостей;</li>
                <li>параллельное проектирование;</li>
                <li>
                  перпендикулярность прямых, прямой и плоскости, двух
                  плоскостей;
                </li>
                <li>теорема о трех перпендикулярах;</li>
                <li>
                  расстояние от точки до плоскости, от прямой до параллельной ей
                  плоскости, между параллельными плоскостями;
                </li>
                <li>угол между прямыми, прямой и плоскостью, плоскостями;</li>
                <li>двугранный угол, линейный угол двугранного угла.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Многогранники, тела вращения</td>
            <td>
              <ul>
                <li>
                  многогранники и их элементы, основные виды многогранников:
                  призма, параллелепипед, пирамида, развертка призмы и пирамиды;
                </li>
                <li>
                  тела вращения, основные виды тел и поверхностей вращения:
                  цилиндр, конус, шар, сфера;
                </li>
                <li>сечения многогранников;</li>
                <li>
                  сечения цилиндра и конуса: осевые сечения, сечения
                  плоскостями, параллельными их основаниям;
                </li>
                <li>сечение шара плоскостью;</li>
                <li>
                  формулы для вычисления площадей поверхностей и объемов призмы
                  и пирамиды;
                </li>
                <li>формулы для вычисления объемов цилиндра, конуса, шара;</li>
                <li>формулы для вычисления площади сферы.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Координаты и векторы в пространстве</td>
            <td>
              <ul>
                <li>
                  прямоугольная система координат в пространстве, координаты
                  точки;
                </li>
                <li>
                  формула для вычисления расстояния между двумя точками и
                  формула для вычисления координат середины отрезка;
                </li>
                <li>
                  понятие вектор, модуль вектора, коллинеарные векторы, равные
                  векторы, координаты вектора;
                </li>
                <li>
                  сложение, вычитание векторов, умножение вектора на число;
                </li>
                <li>скалярное произведение векторов;</li>
                <li>угол между векторами;</li>
                <li>
                  симметрия относительно начала координат и координатных
                  плоскостей.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Themes };
