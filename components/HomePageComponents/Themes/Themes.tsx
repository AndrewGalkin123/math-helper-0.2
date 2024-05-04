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
            <td>
              Отношения и пропорции. Проценты. Основные задачи на проценты.
              Текстовые задачи
            </td>
            <td>Це комірка №2</td>
          </tr>
          <tr>
            <td>
              Рациональные, иррациональные, степенные, показательные,
              логарифмические, тригонометрические выражения и их преобразование
            </td>
            <td>Це комірка №2</td>
          </tr>
          <tr>
            <td>
              Линейные, квадратные, рациональные, иррациональные, показательные,
              логарифмические, тригонометрические уравнения и неравенства.
              Системы линейных уравнений и неравенств. Системы уравнений, в
              которых хотя бы одно уравнение второй степени. Решение текстовых
              задач с помощью уравнений и их систем
            </td>
            <td>Це комірка №2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Themes };
