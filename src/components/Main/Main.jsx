import { useLocation } from "react-router";
import data from "../../data/data.json";
import "./Main.css";
import { MainContext } from "../MainContext/MainContext";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  const mainPreview = data.mainPreview;
  const location = useLocation();
  const isRoute = (item) => {
    if ("/" + item === location.pathname) return true;
  };

  return (
    <main className="main">
      {mainPreview.map((item) =>
        isRoute(item.name) ? (
          <article className="main__preview-sector">
            <div className="preview__backgroud-image">
              <img
                className={`preview__img img-${item.name}`}
                src={item.preview}
                alt={item.title}
              />
            </div>
            <div className="preview__discription-block">
              {item.discription ? (
                <span className="preview__dicription">{item.discription}</span>
              ) : (
                ""
              )}
              {item.button ? (
                <a href="#" className="preview__discription-button">
                  {item.button}
                </a>
              ) : (
                ""
              )}
            </div>
          </article>
        ) : (
          ""
        ),
      )}
      <MainContext isRoute={isRoute} />
    </main>
  );
};
