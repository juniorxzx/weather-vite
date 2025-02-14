import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Layout from "../../components/Layout";
import WeatherIconsDisplay from "../../components/WeatherIconsDisplay";
import WeatherHighlight from "../../components/WeatherHighlight";
import { getGeoLocation } from "../../api/GeoLocation";
import { openWeather } from "../../api/OpenWeather";
import DailyWeather from "../../components/DailyWeather";
import Header from "../../components/Header";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState<Weather.current>();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { lat, lon, city } = await getGeoLocation();
        const data = await openWeather(
          lat,
          lon,
          "minutely,hourly",
          "metric",
          "pt_br"
        );
        setCurrentWeather({ ...data.current, city });
        setWeather(data.daily);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchWeather();
  }, []);

  if (!currentWeather || !weather) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Header />
      <Container>
        <WeatherHighlight
          description={(
            currentWeather.weather[0].description as string
          ).toUpperCase()}
          location={currentWeather.city}
          temperature={Math.round(currentWeather.temp)}
        />
        <WeatherIconsDisplay data={currentWeather} />

        <DailyWeather data={weather} />
      </Container>
    </Layout>
  );
};

export default Home;
