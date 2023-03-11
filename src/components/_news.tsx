import React from "react";

// Import types
import { newsState } from "../types/news";

const News = ({ news, error, loading }: newsState): JSX.Element => {
  const newsArray = news && news?.length > 3 ? news?.slice(0, 3) : news;

  return (
    <div id="news" className="content-weather">
      <div className="title">
        <h3>Todays news</h3>
      </div>
      {loading && (
        <div className="item">
          <div className="text-block">
            <p>News are loading. Wait for a moment</p>
            <p>They will be soon here :{")"}</p>
          </div>
        </div>
      )}
      {error ? (
        <div className="item">
          <div className="text-block">
            <p>{error}</p>
          </div>
        </div>
      ) : (
        newsArray?.map((item: any) => (
          <div className="item" key={item.id}>
            <div className="short-info">
              <div className="lt">
                <div className="author">
                  <p>{item.author}</p>
                </div>
                <div className="date">
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="rt">
                <div className="time">
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <p>{item.content}</p>
            </div>
            <a
              href={item.url}
              className="read-more"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
