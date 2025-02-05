import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.gradient};
  cursor: pointer;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const Temperature = styled.h2`
  font-size: 1rem;
  font-weight: 800;
`;
