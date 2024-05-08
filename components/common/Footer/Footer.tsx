import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Math Symphony</h1>
            <p>
              Math Symphony - это не просто сайт о математике, это место, где
              математика становится мелодией.
            </p>
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
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
