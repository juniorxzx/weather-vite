import React from "react";
import { Container, Title } from "./styles";
import DailyCard from "./DailyCard";

interface DailyWeatherProps {
  data: Weather.daily[];
}

const DailyWeather = ({ data }: DailyWeatherProps) => {
  return (
    <Container>
      <Title>☁️ Previsão para os próximos dias ☁️</Title>

      {data.map((day) => (
        <DailyCard key={day.dt} data={day} /> 
      ))}
    </Container>
  );
};

export default DailyWeather;
