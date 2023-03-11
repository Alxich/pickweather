import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";

const Results = ({
  cityRecieved,
  setCityRecieved,
  setCitySelected,
}: {
  cityRecieved?: any[] | never[];
  setCityRecieved: any;
  setCitySelected: any;
}): JSX.Element => {
  return (
    <div className="results">
      {cityRecieved &&
        cityRecieved.map((item: any, i: Number) => (
          <div
            className="item"
            onClick={() => {
              setCitySelected({
                longitude: item.lng,
                latitude: item.lat,
                cityName: item.name,
              });
              setCityRecieved([]);
            }}
            key={`${item}__${i}`}
          >
            <div className="fafont-icon big">
              <FontAwesomeIcon
                icon={faHouseLaptop}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="title">
              <p>
                {item.name} ({item.country})
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Results;
