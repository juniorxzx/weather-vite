import { Container, Description, Location, Temperature } from "./styles";

interface WeatherHighlightProps {
  location: string;
  temperature: number;
  description: string;
}

const WeatherHighlight = ({
  location,
  description,
  temperature,
}: WeatherHighlightProps) => {
  return (
    <Container>
      <Location>{location}</Location>

      <Temperature>{temperature}° C</Temperature>

      <Description>{description}</Description>
    </Container>
  );
};

export default WeatherHighlight;
