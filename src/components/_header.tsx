import React, { useState } from "react";

// Import icons
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

// Import elements
import { Results, Button } from "./elements";

// Import cities
import cities from "cities.json";
import { searchMeCity } from "../scripts/searchMeCity";

const Header = ({ setCitySelected }: { setCitySelected: any }): JSX.Element => {
  const [userInput, setUserInput] = useState("");

  //Thanks Michael M.
  const [cityRecieved, setCityRecieved] = useState<any[] | undefined>([]);

  return (
    <header id="masthead">
      <div className="container flex-space flex-row">
        <div className="logo">
          <h1>Pickweather.me</h1>
        </div>
        <form className="container flex-row search">
          <div className="input-search">
            <input
              placeholder="Write here your city"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            {cityRecieved && cityRecieved?.length > 0 && (
              <Results
                cityRecieved={cityRecieved}
                setCityRecieved={setCityRecieved}
                setCitySelected={setCitySelected}
              />
            )}
            <Button
              iconIncluded
              iconName={faMagnifyingGlassLocation}
              filled
              big
              onClick={(e: any) => {
                e.preventDefault();
                setCityRecieved(searchMeCity(userInput, cities));
              }}
            >
              {"Search"}
            </Button>
          </div>
        </form>
        <Button filled big>
          {"Contact"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
