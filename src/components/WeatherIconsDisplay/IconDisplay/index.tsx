import { Container, Temperature, Title } from "./styles";

interface IconDisplayProps {
  title: string;
  temperature: string;
  motion?: any;
}

const IconDisplay = ({ title, temperature, motion }: IconDisplayProps) => {
  return (
    <Container {...motion}>
      <Title>{title}</Title>
      <Temperature>{temperature}</Temperature>
    </Container>
  );
};

export default IconDisplay;
