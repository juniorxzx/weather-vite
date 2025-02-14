import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const GroupImages = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Icon = styled(motion.img)`
  position: absolute;
  width: 70px;
  height: 70px;
`;

export const MainIcon = styled(motion.img)`
  width: 80px;
  height: 80px;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin-top: 70px;

  cursor: pointer;
`;
