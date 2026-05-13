import data from "../../data/data.json";
import "./MainContext.css";
import { TeamSlider } from "../TeamSlider/TeamSlider";
import { TextBlocks } from "../TextBlocks/TextBlocks";
import { useLocation } from "react-router";

export const MainContext = ({ isRoute }) => {
  const mainContext = data.mainContext;
  const mainOutTeam = data.mainOutTeam;
  const mainTextBlocks = data.mainTextBlocks;
  const location = useLocation();

  return (
    <div className="main__context-block">
      {mainContext.map((article) =>
        isRoute(article.name) ? (
          <article className="main__title-block">
            <div className="title-block__title">
              <h1 className="title">{article.title}</h1>
              <span className="title-discription">
                {article.titleDiscription}
              </span>
            </div>

            {article.discription ? (
              <p className="title-block__discription">{article.discription}</p>
            ) : (
              ""
            )}

            {article.outTeam ? <TeamSlider team={mainOutTeam} /> : ""}

            {article.textBlocks ? (
              <TextBlocks blocks={mainTextBlocks} prop={article.name} pathname={location.pathname} />
            ) : (
              ""
            )}

            <div className="main__grid-block">
              {article.gridBlock ? (
                <div className="grid-block__content">
                  {article.gridBlock.map((gridItem) => (
                    <div className="grid-item">
                      <div className="background-image__block">
                        <img
                          className="background-image"
                          src={`./src/assets/images/grid/${gridItem.name}.png`}
                          alt={gridItem.title}
                        />
                      </div>
                      <h1 className="grid-title">{gridItem.title}</h1>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </article>
        ) : (
          ""
        ),
      )}
    </div>
  );
};
