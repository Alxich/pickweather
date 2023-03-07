import React from "react";
import { Button, News, WeatherInfo, WeatherList } from "./components";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

function App() {
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
          <div id="categories" className="content-weather">
            <div className="title">
              <h3>Categories</h3>
            </div>
            <ul>
              <li>All</li>
              <li>National</li>
              <li>Business</li>
              <li>Sports</li>
              <li>World</li>
            </ul>
          </div>
          <News />
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
              <a href="https://github.com/alxich">Github</a>
              <a href="http://www.7timer.info">7timer</a>
              <a href="https://github.com/cyberboysumanjay/Inshorts-News-API">
                Inshorts News API
              </a>
              <a href="https://github.com/lutangar/cities.json">cities.json</a>
            </div>
          </div>
        </div>
        <div className="btm container full-width">
          <p>
            Built with <a href="https://github.com/alxich">Alxich</a> and the{" "}
            <a href="http://www.7timer.info">7timer</a> API
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
