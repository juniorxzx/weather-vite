import React, { useContext, useEffect } from "react";
import { Box, Container } from "./styles";
import { ThemeContext } from "../../../store/ThemeContext";
import { IoMoon, IoSunny } from "react-icons/io5";
const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) || {};

  useEffect(() => {}, [theme]);

  return (
    <Container onClick={toggleTheme}>
      <Box
        initial={{ scale: 1 }}
        animate={{ x: theme === "dark" ? 40 : -40, scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        whileTap={{ scale: 0.7 }}
      >
        {theme === "dark" ? <IoMoon size={20} /> : <IoSunny size={20} />}
      </Box>
    </Container>
  );
};

export default ToggleTheme;
