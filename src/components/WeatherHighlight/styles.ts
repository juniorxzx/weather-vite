import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Location = styled(motion.h1)`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 1rem;
  font-weight: 700;
`;

export const Temperature = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
`;

export const Description = styled(motion.h2)`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
