import "./AdditionalInfo.css";

const AdditionalInfo: React.FC = () => {
  return (
    <div className="additional-info">
      <h3>Популярное</h3>
      <div className="divider"></div>
      <br></br>
      <ul>
        <a href="/learning-recources">
          <li>Учебные материалы</li>
        </a>
        <a href="/about-us">
          <li>Какая цель Math Symphony?</li>
        </a>
        <a href="/articles">
          <li>Новости и события</li>
        </a>
        <a href="about-us">
          <li>Информация о Math Symphony</li>
        </a>
        <a href="tasks">
          <li>Тесты</li>
        </a>
        <a>
          <li>История математики</li>
        </a>
      </ul>
    </div>
  );
};

export { AdditionalInfo };
