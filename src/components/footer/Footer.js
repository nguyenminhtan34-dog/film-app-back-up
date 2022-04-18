import logo from "../../assets/img/logo.png";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} />
      </div>
      <div className="footer-content">
        <div className="footer-controll">
          <ul className="footer-list">
            <li className="footer-item">
              <a className="footer-link">Home</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Contact us</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Term of service</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">About us</a>
            </li>
          </ul>
        </div>

        <div className="footer-controll">
          <ul className="footer-list">
            <li className="footer-item">
              <a className="footer-link">Live</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">FQA</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Premium</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-controll">
          <ul className="footer-list">
            <li className="footer-item">
              <a className="footer-link">You must watch</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Recent release</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Top IMDB</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
