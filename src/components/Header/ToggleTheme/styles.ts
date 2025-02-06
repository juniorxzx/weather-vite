import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  width: 120px;
  height: 40px;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
