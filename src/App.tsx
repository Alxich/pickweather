import React, { useEffect, useState } from "react";

// Redux Hooks
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

// Import json default
import categories from "./defaults/categories.json";

// Importing components

import { Header, News, WeatherInfo, WeatherList, Footer } from "./components";
import { Categories, Loading } from "./components/elements";

function App(): JSX.Element {
  const {
    news,
    error: newsError,
    loading: newsLoading,
    category,
  } = useTypedSelector((state) => state.news);

  const { weatherAstro, weatherCivil, error, loading } = useTypedSelector(
    (state) => state.weather
  );

  const { fetchWeather, fetchNews } = useActions();

  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [citySelected, setCitySelected] = useState<{
    latitude: string | null;
    longitude: string | null;
    cityName: string | "London" | null;
  }>({
    latitude: null,
    longitude: null,
    cityName: "London",
  });

  useEffect(() => {
    fetchWeather({ latitude: null, longitude: null });
    fetchNews({ category: null });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchNews({ category: categorySelected ? categorySelected : null });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  useEffect(() => {
    fetchWeather({
      latitude: citySelected.latitude,
      longitude: citySelected.longitude,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citySelected]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <h1>{error}</h1>;
  } else {
    return (
      <div className="App">
        <Header setCitySelected={setCitySelected} />
        <main>
          <div className="container flex-row flex-stretch flex-space">
            <WeatherInfo
              name={citySelected.cityName}
              weatherAstro={weatherAstro}
              weatherCivil={weatherCivil}
            />
            <WeatherList weatherAstro={weatherAstro} />
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
        <Footer />
      </div>
    );
  }
}

export default App;
