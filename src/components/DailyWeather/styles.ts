import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled(motion.h1)`
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
