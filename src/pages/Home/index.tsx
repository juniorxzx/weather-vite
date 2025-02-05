import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Layout from "../../components/Layout";
import WeatherIconsDisplay from "../../components/WeatherIconsDisplay";
import WeatherHighlight from "../../components/WeatherHighlight";
import { getGeoLocation } from "../../api/GeoLocation";
import { openWeather } from "../../api/OpenWeather";

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
        console.log(data.current);
        console.log(data.daily);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchWeather();
  }, []);

  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Container>
        <WeatherHighlight
          description={(
            currentWeather.weather[0].description as string
          ).toUpperCase()}
          location={currentWeather.city}
          temperature={Math.round(currentWeather.temp)}
        />
        <WeatherIconsDisplay data={currentWeather}/>
      </Container>
    </Layout>
  );
};

export default Home;
