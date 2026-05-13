import { Link, useLocation } from "react-router";
import data from "../../data/data.json";
import "./Header.css";

export const Header = () => {
  const location = useLocation();
  console.log(location);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header-content__left-side-block">
          {data.headerNavElements.map((element) =>
            element.side === "l" ? (
              <Link
                className={`nav-link ${location.pathname === "/" + element.path ? "active" : ""}`}
                to={`/${element.path}`}
              >
                {element.elementName}
              </Link>
            ) : (
              ""
            ),
          )}
        </div>
        <div className="header-content__middle-side-logo">
          <img
            className="nav-logo"
            src="./images/logo.png"
            alt="logo"
          />
        </div>
        <div className="header-content__right-side-block">
          {data.headerNavElements.map((element) =>
            element.side === "r" ? (
              <Link
                className={`nav-link ${location.pathname === "/" + element.path ? "active" : ""}`}
                to={`/${element.path}`}
              >
                {element.elementName}
              </Link>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
    </header>
  );
};
