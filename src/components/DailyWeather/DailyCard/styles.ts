import { motion } from "framer-motion";
import styled from "styled-components";

import { TbTemperaturePlus, TbTemperatureMinus } from "react-icons/tb";



export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Date = styled.h4`
  font-size: 1rem;
  font-weight: 700;
`;

export const MinMax = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const MaxIcon = styled(TbTemperaturePlus)`
  color: ${({ theme }) => theme.colors.hot};
  font-size: 1rem;
`;
export const MinIcon = styled(TbTemperatureMinus)`
  color: ${({ theme }) => theme.colors.cold};
  font-size: 1rem;
`;



export const ConditionIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
