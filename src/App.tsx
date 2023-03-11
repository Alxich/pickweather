import React, { useEffect, useState } from "react";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

// Redux Hooks
import { useTypedSelector } from "./hooks/useTypedSelector";

// import json default
import categories from "./defaults/categories.json";

// Import cities
import cities from 'cities.json';
import { searchMeCity } from "./scripts/searchMeCity";

import {
  Button,
  Categories,
  Loading,
  News,
  WeatherInfo,
  WeatherList,
} from "./components";
import { useActions } from "./hooks/useActions";

function App(): JSX.Element {
  const { weatherAstro, weatherCivil, error, loading } = useTypedSelector(
    (state) => state.weather
  );

  const {
    news,
    error: newsError,
    loading: newsLoading,
    category,
  } = useTypedSelector((state) => state.news);

  const { fetchWeather, fetchNews } = useActions();

  const [categorySelected, setCategorySelected] = useState("");

  useEffect(() => {
    fetchWeather();
    fetchNews({ category: null });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchNews({ category: categorySelected ? categorySelected : null });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  console.log(searchMeCity("New York", cities));

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <h1>{error}</h1>;
  } else {
    return (
      <div className="App">
        <header id="masthead">
          <div className="container flex-space flex-row">
            <div className="logo">
              <h1>Pickweather.me</h1>
            </div>
            <form className="container flex-row search">
              <input placeholder="Write here your city" />
              <Button
                iconIncluded
                iconName={faMagnifyingGlassLocation}
                filled
                big
              >
                {"Search"}
              </Button>
            </form>
            <Button filled big>
              {"Contact"}
            </Button>
          </div>
        </header>
        <main>
          <div className="container flex-row flex-stretch flex-space">
            <WeatherInfo />
            <WeatherList />
          </div>
          <div className="container flex-row flex-stretch flex-space border content-use margin-top">
            <Categories
              categories={categories.categories}
              category={category}
              setCategorySelected={setCategorySelected}
            />
            <News
              news={news}
              loading={newsLoading}
              error={newsError}
              category={category}
            />
          </div>
        </main>
        <footer id="colophone">
          <div className="top container full-width">
            <div className="container flex-row flex-stretch">
              <div className="about">
                <div className="title">
                  <h3>Pickweather.me</h3>
                </div>
                <div className="text-block">
                  <p>
                    Project about picking weather via{" "}
                    <a href="http://www.7timer.info">api 7timer</a>. <br />
                    Allows you to pick fast and new information about weather in
                    your area without any registration or email verification.
                    <br />
                    Use it with fun.
                  </p>
                </div>
              </div>
              <div className="info container flex-left">
                <div className="title">
                  <h3>Interesting links</h3>
                </div>
                <a
                  href="https://github.com/alxich"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href="http://www.7timer.info"
                  target="_blank"
                  rel="noreferrer"
                >
                  7timer
                </a>
                <a
                  href="https://github.com/cyberboysumanjay/Inshorts-News-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inshorts News API
                </a>
                <a
                  href="https://github.com/lutangar/cities.json"
                  target="_blank"
                  rel="noreferrer"
                >
                  cities.json
                </a>
              </div>
            </div>
          </div>
          <div className="btm container full-width">
            <p>
              Built with{" "}
              <a
                href="https://github.com/alxich"
                target="_blank"
                rel="noreferrer"
              >
                Alxich
              </a>{" "}
              and the{" "}
              <a href="http://www.7timer.info" target="_blank" rel="noreferrer">
                7timer
              </a>{" "}
              API
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
