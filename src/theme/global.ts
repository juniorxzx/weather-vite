import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

  }

  body{
    min-width: 320px;
    width: 100%;
    height: 100%;

  }
`;
