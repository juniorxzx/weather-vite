import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
