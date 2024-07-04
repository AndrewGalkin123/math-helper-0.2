import tests from "../../../public/content/Tests.json";
import "./Tasks.css";

interface TasksProps {
  theme: string;
}

const Tasks: React.FC<TasksProps> = ({ theme }) => {
  const themeData = tests[theme];

  if (!themeData) {
    return <div>Нет данных для этой темы</div>;
  }
  return (
    <div className="tasks-container">
      <h1>Тест на тему {themeData.title}</h1>
      <div className="tasks">
        <div className="task">
          <span className="task-number">Задание №1</span>
          <div className="task-description">{themeData.firstTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №2</span>
          <div className="task-description">{themeData.secondTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №3</span>
          <div className="task-description">{themeData.thirdTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №4</span>
          <div className="task-description">{themeData.fourthTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №5</span>
          <div className="task-description">{themeData.fifthTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №6</span>
          <div className="task-description">{themeData.sixthTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №7</span>
          <div className="task-description">{themeData.seventhTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №8</span>
          <div className="task-description">{themeData.eightTask}</div>
        </div>
        <div className="task">
          <span className="task-number">Задание №9</span>
          <div className="task-description">{themeData.ninthTask}</div>
        </div>
      </div>
    </div>
  );
};

export { Tasks };
