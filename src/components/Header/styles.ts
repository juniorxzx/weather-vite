import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
`;
