import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <h1>Math Symphony</h1>
      </a>
      <nav>
        <ul>
          <a href="/learning-resources">
            <li>Учебные ресурсы</li>
          </a>
          <a href="/articles">
            <li>Статьи</li>
          </a>
          <a href="/tasks">
            <li>Задачи и упражнения</li>
          </a>
          <a href="/about-us">
            <li>О нас</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
