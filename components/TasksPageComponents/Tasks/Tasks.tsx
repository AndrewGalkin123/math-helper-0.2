import React from "react";
import tests from "../../../public/content/Tests.json";
import "./Tasks.css";

interface TasksProps {
  theme: string;
}

const Tasks: React.FC<TasksProps> = ({ theme }) => {
  const themeData = tests[theme];

  // Замена символов \n на <br />
  const formatText = (text: string) => {
    if (!text) return "";

    // Замена дробей вида \frac{a}{b} на HTML код
    const withFractions = text.replace(
      /\\\(\\frac{([^{}]+)}{([^{}]+)}\\\)/g,
      "<sup>$1</sup>&frasl;<sub>$2</sub>"
    );

    // Замена символов \n на <br />
    return withFractions.replace(/\n/g, "<br />");
  };

  if (!themeData) {
    return <div>Нет данных для этой темы</div>;
  }
  return (
    <div className="tasks-container">
      <h1>Тест на тему {themeData.title}</h1>
      <div className="tasks">
        <div className="task">
          <span className="task-number">Задание №1</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.firstTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №2</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.secondTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №3</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.thirdTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №4</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.fourthTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №5</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.fifthTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №6</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.sixthTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №7</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.seventhTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №8</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.eightTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
        <div className="task">
          <span className="task-number">Задание №9</span>
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(themeData?.ninthTask || ""),
            }}
            className="task-description"
          ></div>
        </div>
      </div>
    </div>
  );
};

export { Tasks };
