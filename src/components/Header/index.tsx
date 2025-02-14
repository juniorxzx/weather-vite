import React from "react";
import { Box, Container, HeaderStyled } from "./styles";
import Location from "./Location";
import ToggleTheme from "./ToggleTheme";
import Logout from "./Logout";

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Location />

        <Box>
          <ToggleTheme />
          <Logout />
        </Box>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
