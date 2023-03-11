import React from "react";

const Footer = (): JSX.Element => {
  return (
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
              href="https://github.com/Yeqzids/7timer-issues/wiki/Wiki"
              target="_blank"
              rel="noreferrer"
            >
              7timer Wiki
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
          <a href="https://github.com/alxich" target="_blank" rel="noreferrer">
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
  );
};

export default Footer;
