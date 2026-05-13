import { Link } from "react-router";
import "./Footer.css";
import data from "../../data/data.json";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
  const footerElements = data.footerElement;
  return (
    <footer className="footer">
      <div className="footer-block">
        <p className="footer-title">Request More Information</p>
        <div className="footer-description">
          <span className="footer-description__text">
            Welcome to SIRUNYAN CAD Studio, where artistry meets technology to
            create breathtaking jewelry designs.
          </span>
          <Link className="footer-description__contact-us" to={"/contacts"}>
            <span>Contact Us</span>
          </Link>
          <span className="footer-description__copyright">
            &#169; 2024 FriendTech, LLC
          </span>
        </div>
        <div className="footer__bottom">
          <div className="bottom-logo">
            <img
              className="footer-logo"
              src="./images/logo.png"
              alt="logo"
            />
          </div>
          <div className="bottom-middle-nav">
            {footerElements.map((element) => (
              <Link className="footer-link" to={`/${element.path}`}>
                {element.elementName}
              </Link>
            ))}
          </div>
          <div className="bottom-social-media">
            <FaTwitter className="footer-media-link" />
            <IoLogoInstagram className="footer-media-link" />
            <FaDiscord className="footer-media-link" />
          </div>
        </div>
      </div>
    </footer>
  );
};
