import { Container } from "./styles";
import IconDisplay from "./IconDisplay";

interface WeatherIconsDisplayProps {
  data: Weather.current;
}

const WeatherIconsDisplay = ({ data }: WeatherIconsDisplayProps) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <IconDisplay
        motion={{
          initial: { x: -100 },
          animate: { x: 0 },
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        title="Sensação"
        temperature={`${Math.round(data.feels_like)}° C`}
      />
      <IconDisplay
        motion={{
          initial: { x: -150, y: 0 },
          animate: { x: 0, y: -20 },
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        title="Umidade"
        temperature={`${Math.round(data.humidity)}%`}
      />
      <IconDisplay
        motion={{
          initial: { x: -200 },
          animate: { x: 0 },
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        title="Ventos"
        temperature={`${Math.round(data.wind_speed)} Km/h`}
      />
    </Container>
  );
};

export default WeatherIconsDisplay;
