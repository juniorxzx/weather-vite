import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
