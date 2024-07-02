import "./MainLearningInfo.css";
import learningResources from "../../../public/content/LearningResources.json";

interface MainLearningInfoProps {
  theme: string;
}

const MainLearningInfo: React.FC<MainLearningInfoProps> = ({ theme }) => {
  const themeData = learningResources[theme];

  if (!themeData) {
    return <div>Нет данных для этой темы</div>;
  }

  return (
    <div className="learning-info">
      <h1>{themeData.title}</h1>
      <p>{themeData.smallDescription}</p>
      <h3>{themeData.firstSubtopic}</h3>
      <p>{themeData.firstParagraph}</p>
      <h3>{themeData.secondSubtopic}</h3>
      <p>{themeData.secondParagraph}</p>
      <h3>{themeData.thirdSubtopic}</h3>
      <p>{themeData.thirdParagraph}</p>
      <br></br>
      <p>{themeData.conclusion}</p>
    </div>
  );
};

export { MainLearningInfo };
