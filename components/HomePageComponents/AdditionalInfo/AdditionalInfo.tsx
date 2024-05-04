import "./AdditionalInfo.css";

const AdditionalInfo: React.FC = () => {
  return (
    <div className="additional-info">
      <h3>Популярное</h3>
      <div className="divider"></div>
      <br></br>
      <ul>
        <li>Учебные материалы</li>
        <li>Какая цель Math Symphony?</li>
        <li>Новости и события</li>
        <li>Информация о Math Symphony</li>
        <li>Тесты</li>
        <li>История математики</li>
      </ul>
    </div>
  );
};

export { AdditionalInfo };
