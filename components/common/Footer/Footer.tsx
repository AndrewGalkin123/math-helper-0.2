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
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="">Полезные ссылки</Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScJ1tDNHO2PGDOSlk5O439rSO5Ie7hTZbykz7iKxK3G0o41nA/viewform?usp=sf_link"
                >
                  Написать нам
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Наши ссылки</h4>
            <div className="social-links">
              <a target="_blank" href="https://t.me/tgCodeCraft">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/AndrewGalkin123?tab=overview&from=2024-07-01&to=2024-07-22"
              >
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
