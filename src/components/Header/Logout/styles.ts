import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
