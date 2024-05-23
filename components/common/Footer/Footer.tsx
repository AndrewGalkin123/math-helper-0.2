import "./Footer.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>История проекта</h4>
            <ul>
              <li>
                <Link href="/about-us">Про нас</Link>
              </li>
              <li>
                <Link href="">Наша команда</Link>
              </li>
              <li>
                <Link href="about-us">История проекта</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Учебные материалы</h4>
            <ul>
              <li>
                <Link href="/learning-resources">Учебные ресурсы</Link>
              </li>
              <li>
                <Link href="/articles">Статьи</Link>
              </li>
              <li>
                <Link href="/tasks">Упражнения</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Полезная информация</h4>
            <ul>
              <li>
                <Link href="">FAQ</Link>
              </li>
              <li>
                <Link href="">Полезные ссылки</Link>
              </li>
              <li>
                <Link target="_blank" href="">
                  Написать нам
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Наши ссылки</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
