import React from "react";
import {
  Box,
  ConditionIcon,
  Container,
  Date,
  MaxIcon,
  MinIcon,
  MinMax,
} from "./styles";
import { timestampToDate } from "../../../utils/timestapToDate";

interface DailyCardProps {
  data: Weather.daily;
}

const DailyCard = ({ data }: DailyCardProps) => {
  return (
    <Container>
      <Date>{timestampToDate(data.dt).split("-")[0]}</Date>

      <ConditionIcon>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
        <span>{data.weather[0].description}</span>
      </ConditionIcon>

      <MinMax>
        <Box>
          <MinIcon />
          <span>{Math.round(data.temp.min)}°</span>
        </Box>

        <Box>
          <MaxIcon />
          <span>{Math.round(data.temp.max)}°</span>
        </Box>
      </MinMax>
    </Container>
  );
};

export default DailyCard;
