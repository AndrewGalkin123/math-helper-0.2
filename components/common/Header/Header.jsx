import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Math Symphony</h1>
      <nav>
        <ul>
          <a href="/learning-resources">
            <li>Учебные ресурсы</li>
          </a>
          <a>
            <li>Статьи</li>
          </a>
          <a>
            <li>Задачи и упражнения</li>
          </a>
          <a>
            <li>О нас</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
