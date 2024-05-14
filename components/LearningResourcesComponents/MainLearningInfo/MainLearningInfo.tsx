import "./MainLearningInfo.css";
import learningResources from "../../../public/content/LearningResources.json";

interface MainLearningInfoProps {
  theme: string;
}

const MainLearningInfo: React.FC<MainLearningInfoProps> = ({ theme }) => {
  // Проверяем, существует ли тема в learningResources
  if (!(theme in learningResources)) {
    return <div>No data available for this theme</div>;
  }

  // Если тема существует, получаем соответствующий объект и используем его свойства
  const themeData = learningResources[theme];

  return (
    <div className="learning-info">
      <p>{themeData.firstParagraph}</p>
    </div>
  );
};

export { MainLearningInfo };
